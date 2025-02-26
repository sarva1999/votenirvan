import Avvvatars from 'avvvatars-react'





export default () => {

    const team = [
        {
            email:"sarvadhanush469@gmail.com",
            name: "Dhanush Sarva",
            title: "Full Stack Developer",
        },
        

    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-red-500 text-4xl font-bold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-white mt-3">
                       
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-20 h-20 mx-auto">
                                      <Avvvatars value={item.email} size={75} />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-white font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}