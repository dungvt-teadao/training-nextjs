export default function About(){
    return <section className="w-screen mt-12">
        <div className="flex flex-1 justify-start items-center flex-col gap-6">
            <h5 className="font-bold text-4x1"> Activities</h5>
            <p className="text 2x1 uppercase font-light"> 
                EduHub Institude Of Technology
            </p>
            <p className="w-3/5 text-center text-2x1 font-cursive">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vel quidem dicta dignissimos harum dolor totam iste debitis accusamus odit, illo soluta ipsum natus veritatis omnis. 
                Vero saepe odit accusantium veritatis.
            </p>
                <div className="flex justify-center items-center gap-6">
                    <img className="w-1/4 shadow-lg hover:shadow-2x1"
                        src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"
                        alt="Img1"
                        />
                     <img className="w-1/4 shadow-lg hover:shadow-2x1"
                        src="https://cdn.pixabay.com/photo/2015/09/04/23/04/library-922998_1280.jpg"
                        alt="Img2"
                        />
                     <img className="w-1/4 shadow-lg hover:shadow-2x1"
                        src="https://cdn.pixabay.com/photo/2015/09/04/23/04/library-922998_1280.jpg"
                        alt="Img3"
                        />
                </div>
                <button className="border-red-500 border-2 p-2 rounded-md"> 
                     View More 
                </button>
        </div>
    </section>
}