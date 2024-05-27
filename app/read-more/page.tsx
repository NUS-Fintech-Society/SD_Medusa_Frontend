import WithSubnavigation from "../components/navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faLaptopCode, faUsers, faRoad } from "@fortawesome/free-solid-svg-icons";


const ReadMore = () => {
    return (
        <>
            <WithSubnavigation />
            <div className="flex flex-col items-left justify-center bg-brand-yellow px-10 md:px-40 font-dmsans">
                <p className="font-semibold text-h1-l my-12">
                    Understanding Medusa
                </p>
                <p className="font-semibold text-ftnal-black text-h4-s mb-4">
                    Medusa was developed to address a fundamental challenge: making the NFS's diverse range of projects, particularly in machine learning and blockchain, available to any interested party in an integrated platform.
                </p>
                <p className="font-extralight text-h4-s mb-12">
                    The project's essence was to transform the way these services were showcased - from mere articles and Github repositories to a fully interactive digital experience.
                </p>
            </div>
            <div className="flex flex-col bg-brand-blue">
                <div className="items-left px-10 md:px-40 text-white">
                    <p className="font-semibold text-h4-s mt-8 mb-4">
                        Pain Points and Objectives
                    </p>
                    <p className="font-extralight mb-4">
                        The society recognised the need to transition from traditional showcases to a more integrated experience. This change was not just about impressing sponsors and the public but also about enhancing user engagement with the society’s projects. The goal was to create a customisable, scalable, and user-friendly platform.
                    </p>
                </div>

                <div className="items-left px-10 md:px-40 text-white">
                    <p className="font-semibold text-h4-s mt-8 mb-4">
                        The Approach: Microservices Architecture
                    </p>
                    <p className="font-extralight mb-8">
                        The choice of a microservice architecture enabled the independent deployment of each service, ensuring scalability and flexibility. With future expansions in mind, this architecture promised an evolving platform that could adapt to changing needs and technologies.
                    </p>
                </div>

                <div className="items-left px-10 md:px-40 text-white">
                    <p className="text-brand-yellow font-bold text-h3-l text-center">
                        The Development Journey
                    </p>
                    <p className="font-semibold text-h4-s mt-8 mb-4">
                        Milestone Achievements
                    </p>
                    <p className="font-extralight mb-8">
                        The project was divided into four major milestones, each marking a significant phase in the development process:
                    </p>

                    <div className="flex flex-col md:flex-row mb-8">
                        <div className="flex-1 md:mr-8 flex flex-col items-center text-justify">
                            <FontAwesomeIcon icon={faUsers} width="50"/>
                            <p className="font-semibold mb-2 mt-8 text-left">
                                1. Project Inception and Planning
                            </p>
                            <p className="font-extralight mb-8">
                                Initially, the Design Manager's input was pivotal in establishing the aesthetic foundation of Medusa. Utilising Figma, the design team crafted the initial colour scheme and essential UI components, including navigation bars and buttons. The tech team was briefed on the project specificities as well as the frameworks to be used in development.
                            </p>
                        </div>
                        <div className="flex-1 md:mr-8 flex flex-col items-center">
                         <FontAwesomeIcon icon={faLaptopCode} width="50"/>
                            <p className="font-semibold mb-2 mt-8">
                                2. Early Development
                            </p>
                            <p className="font-extralight mb-6 text-justify">
                                Following the Figma design, the Tech team translated the mockups into a static Next.js web application. Thereafter, functionality was incrementally added, such as a contact form, and user sign ups and authentication.
                            </p>
                            <p className="font-semibold mb-2">
                                3. Advanced Development
                            </p>
                            <p className="font-extralight mb-8 text-justify">
                                This phase saw further collaboration between design and development teams. The tech team worked out the deployment process for the projects, which involved dockerising repositories of interest, pushing to AWS ECR, and deploying on Fargate. The design team continued their iterative wireframing and prototyping to hone user experience on the frontend.
                            </p>
                        </div>
                        <div className="flex-1 md:mr-8 flex flex-col items-center">
                            <FontAwesomeIcon icon={faRocket} width="40" />
                            <p className="font-semibold mb-2 mt-8">
                                4. Finalisation and Deployment
                            </p>
                            <p className="font-extralight text-justify">
                                The Design Manager's commitment to refining the user experience through continuous feedback was matched by the Tech Lead's meticulous attention to functional deployment and seamless service integration.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="items-left px-10 md:px-40 text-white">
                    <p className="font-semibold text-h4-l mt-8 mb-4">
                        Technical Specifications and Challenges
                    </p>
                    <p className="font-extralight mb-8">
                        The project's complexity required an approach that blended intuitive design with robust technical implementation.
                    </p>
                    <p className="font-semibold mb-4">
                        Technical Integration:
                    </p>
                    <p className="font-extralight mb-4">
                        The iterative design process brought Medusa to life, with a focus on user engagement and intuitive navigation, complemented by a strategic backend and frontend division.
                    </p>
                    <p className="font-extralight mb-8">
                        With the frontend leveraging Next.js for a dynamic, responsive interface featuring user sign-ups and FormSubmit for contact inquiries, the backend was sculpted with scalability in mind, utilising AWS's suite of services for fluid microservice deployment.
                    </p>
                </div>

                <div className="items-left px-10 md:px-40 pb-20 text-white items-center">
                    <p className="font-semibold text-h4-l mt-8 mb-8">
                        Looking Forward
                    </p>
                    <div className="flex flex-row items-center justify-start">
                        <div>
                            <FontAwesomeIcon icon={faRoad} width="100"/>
                        </div>
                        <div className="flex flex-col ml-12">
                            <p className="font-extralight mb-4 text-justify">
                                As extensions to our project, we would be:
                            </p>
                            <p className="font-extralight mb-2 text-justify">
                                1. Progressively including more microservices
                            </p>
                            <p className="font-extralight mb-2 text-justify">
                                2. Obtaining user feedback to actively make changes as they come
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReadMore;
