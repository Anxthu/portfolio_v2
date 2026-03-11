# Blog Workflow Guide

## How to Add New Blog Posts from Instagram

### Step 1: Prepare Your Image
1. Save your Instagram post image
2. Optimize it (WebP format recommended, <500KB)
3. Upload to `/public/images/blog/your-image-name.webp`

### Step 2: Use the Blog Editor
1. Navigate to `/blog-editor` in your browser
2. Fill in the form:
   - **Instagram URL** (optional): Link to your Instagram post
   - **Title**: Catchy title for your blog post
   - **Category**: UI Design, UX Research, Design Tips, etc.
   - **Image URL**: `/images/blog/your-image-name.webp`
   - **Excerpt**: Your Instagram caption or short description
   - **Additional Content** (optional): Add extra context beyond Instagram

### Step 3: Copy & Paste
1. Click "Copy" button to copy the generated code
2. Open `src/lib/blogData.ts`
3. Find the `blogPosts` array
4. Paste your new blog post object at the beginning of the array
5. Save the file

### Step 4: Done!
Your new blog post is now live at `/blog`

## Example Blog Post Structure

```typescript
{
  slug: "5-tips-better-ui",
  title: "5 Tips for Better UI Design",
  excerpt: "Quick tips to elevate your interface design game",
  category: "UI Design",
  date: "March 2024",
  image: "/images/blog/ui-tips.webp",
  instagramUrl: "https://instagram.com/p/...",
  content: [
    {
      type: "paragraph",
      text: "Your Instagram caption or intro paragraph"
    },
    {
      type: "paragraph",
      text: "Additional context or explanation"
    }
  ]
}
```

## Tips
- Keep titles under 60 characters for better SEO
- Use high-quality images (1200x800px recommended)
- Categories should be consistent (check existing posts)
- Add extra context beyond Instagram to provide more value
- Link back to Instagram if you want to drive engagement there

## Categories to Use
- UI Design
- UX Research
- Design Systems
- Design Tips
- Brand Identity
- Case Studies
- Design Process
- Tools & Resources
