import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
         <h1 className="head_text text-center text-black">discover and Share
            <br className="max-md:hidden"/>
            
            <span className="orange_gradient text-center">AI Prompts</span>
         </h1>

         <p className="desc text-center">
            AI Prompting Tool Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe numquam recusandae ad?
         </p>
         {/* FEED */}
         <Feed />
    </section>
  )
}

export default Home
