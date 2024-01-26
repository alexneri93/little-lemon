import '../../css/components/chicago.css';
import marioadriana from "../../assets/Mario and Adrian A.jpg"
import marioadrianb from "../../assets/Mario and Adrian b.jpg"

function Chicago(){
    return(
        <section className="about pt-5 pb-5">
            <div className="container d-grid grid-columns-1 grid-columns-lg-2 gap-big">
                <div className="d-flex flex-column justify-center">
                    <h2 className="fw-medium type-markazi fs-6 text-gray">Little Lemon</h2>
                    <div className="fw-regular type-markazi fs-5 mb-4">Chicago</div>
                    <p className="mb-2">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <div className="p-relative">
                    <img src={marioadrianb} alt="Mario & Adrian Cooking" className="about__img w-75 p-absolute right-0"/>
                    <img src={marioadriana} alt="Mario & Adrian cooking" className="about__img w-75 p-relative"/>
                </div>
            </div>
        </section>
    )
}

export default Chicago;