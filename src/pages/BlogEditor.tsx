import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Copy, Check } from "lucide-react";

const BlogEditor = () => {
    const [instagramUrl, setInstagramUrl] = useState("");
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [additionalContent, setAdditionalContent] = useState("");
    const [copied, setCopied] = useState(false);

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    };

    const getCurrentDate = () => {
        const months = ["January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December"];
        const now = new Date();
        return `${months[now.getMonth()]} ${now.getFullYear()}`;
    };

    const generateBlogPost = () => {
        const slug = generateSlug(title);
        const date = getCurrentDate();

        const blogPost = {
            slug,
            title,
            excerpt,
            category,
            date,
            image: imageUrl,
            instagramUrl,
            content: [
                {
                    type: "paragraph",
                    text: excerpt,
                },
                ...(additionalContent
                    ? additionalContent.split("\n\n").map((para) => ({
                          type: "paragraph" as const,
                          text: para.trim(),
                      }))
                    : []),
            ],
        };

        return JSON.stringify(blogPost, null, 2);
    };

    const handleCopy = () => {
        const code = generateBlogPost();
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isFormValid = title && excerpt && category && imageUrl;

    return (
        <PageTransition>
            <div className="min-h-screen bg-background">

                <div className="section-padding pt-32 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 uppercase font-heading tracking-tight">
                            Blog Editor
                        </h1>
                        <p className="text-muted-foreground text-lg mb-16">
                            Convert your Instagram posts to blog entries
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Form */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Instagram URL (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        value={instagramUrl}
                                        onChange={(e) => setInstagramUrl(e.target.value)}
                                        placeholder="https://instagram.com/p/..."
                                        className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Title *
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="5 Tips for Better UI Design"
                                        className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Category *
                                    </label>
                                    <input
                                        type="text"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder="UI Design, UX Research, Design Tips..."
                                        className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Image URL *
                                    </label>
                                    <input
                                        type="url"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                        placeholder="/images/blog/post-image.jpg"
                                        className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Upload image to /public/images/blog/ first
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Excerpt / Caption *
                                    </label>
                                    <textarea
                                        value={excerpt}
                                        onChange={(e) => setExcerpt(e.target.value)}
                                        placeholder="Short description or Instagram caption..."
                                        rows={3}
                                        className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Additional Content (Optional)
                                    </label>
                                    <textarea
                                        value={additionalContent}
                                        onChange={(e) => setAdditionalContent(e.target.value)}
                                        placeholder="Add extra context beyond Instagram caption. Separate paragraphs with double line breaks."
                                        rows={8}
                                        className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Preview & Code */}
                            <div className="space-y-6">
                                {/* Preview */}
                                {isFormValid && (
                                    <div className="border border-border rounded-sm p-6 bg-muted/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                                            Preview
                                        </h3>
                                        <div className="aspect-[16/10] bg-background mb-4 overflow-hidden">
                                            {imageUrl && (
                                                <img
                                                    src={imageUrl}
                                                    alt={title}
                                                    className="w-full h-full object-cover"
                                                 loading="lazy" />
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs uppercase tracking-wider text-muted-foreground">
                                                {category}
                                            </span>
                                            <span className="text-xs text-muted-foreground">•</span>
                                            <span className="text-xs text-muted-foreground">
                                                {getCurrentDate()}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                                        <p className="text-sm text-muted-foreground">{excerpt}</p>
                                    </div>
                                )}

                                {/* Generated Code */}
                                {isFormValid && (
                                    <div className="border border-border rounded-sm overflow-hidden">
                                        <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-border">
                                            <h3 className="text-sm font-semibold uppercase tracking-wider">
                                                Generated Code
                                            </h3>
                                            <button
                                                onClick={handleCopy}
                                                className="flex items-center gap-2 text-sm hover:text-foreground transition-colors"
                                            >
                                                {copied ? (
                                                    <>
                                                        <Check className="w-4 h-4" />
                                                        Copied!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="w-4 h-4" />
                                                        Copy
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <pre className="p-4 bg-background overflow-x-auto text-xs">
                                            <code>{generateBlogPost()}</code>
                                        </pre>
                                    </div>
                                )}

                                {isFormValid && (
                                    <div className="border border-border rounded-sm p-6 bg-muted/30">
                                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                                            Instructions
                                        </h3>
                                        <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                                            <li>Copy the generated code above</li>
                                            <li>Open src/lib/blogData.ts</li>
                                            <li>Add the code to the blogPosts array</li>
                                            <li>Save the file</li>
                                            <li>Your new blog post is live!</li>
                                        </ol>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default BlogEditor;
