import Blog from "./Blog";
import Sidebar from "./Sidebar";
const blogs = [
    {
    title: "The Charm of Playful Kittens",
    content: "In a world filled with cuteness, playful kittens can brighten up our days. This blog post explores the joy and delight that kittens bring into our lives, showcasing their adorable antics and sharing tips on how to care for and interact with these furry bundles of joy."
  },
  {
    title: "Adventures with Feline Friends",
    content: "Kittens love to explore their surroundings, and this blog post takes you on exciting adventures with these curious creatures. Discover their curious nature, playful energy, and the bonding experiences that come with sharing memorable moments with your feline friends."
  },
  {
    title: "Unleashing Cuteness: Heartwarming Moments with Kittens",
    content: "Prepare to be overwhelmed by cuteness! This blog post is a collection of heartwarming moments with kittens. From their adorable purrs to their gentle cuddles, experience the love and companionship that these furry companions bring into our lives."
  },
  {
    title: "Kitten Care 101: Nurturing and Protecting Your Furry Pal",
    content: "Caring for a kitten is a rewarding experience. In this blog post, we provide essential tips and guidance on kitten care. Learn about their nutritional needs, grooming requirements, and creating a safe and loving environment to ensure your furry pal thrives."
  },
  {
    title: "The Power of Kitten Love: Strengthening the Human-Animal Bond",
    content: "The bond between humans and kittens is special and heartwarming. This blog post explores the power of kitten love and the positive impact it has on our well-being. Discover how their affectionate nature and playful spirit can bring happiness and a sense of fulfillment to our lives."
  }
  ];
  
const BlogBody = () => {
    return(
        <section className="main-body">
            <div>
                {
                    blogs.map((blog) => {
                        return <Blog title={blog.title} content={blog.content} />
                    })
                }
            </div>
            <Sidebar />
        </section>
    )
}
export default BlogBody;
