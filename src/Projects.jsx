import { useRef } from 'react';
import Card from './Card';
import Button from './Button';
import RegisterForm from './RegisterForm'; 
import airlineImage from './assets/airline-project.png';
import campImage from './assets/camp.png';
import chatbotImage from './assets/chatbot.png';


function Projects({ page, setPage }) {
    const dialogRef = useRef(null);

    return (
        <div className="about-container">
            <h3 className='projects-title'>Recent Projects</h3>
            <div className="cards-container">
                <Card 
                    imgSrc={airlineImage}
                    imgAlt="airline-project" 
                    title="Airline Management System" 
                    description="Developed an airline management system in Java using NetBeans and OOP principles, incorporating multi-role user authentication, ticket sales, flight information management, and crew assignment functionality."
                >
                    <Button 
                        visual="button" 
                        onClick={() => dialogRef.current.showModal()}
                        linkText="Subscribe"
                    />
                </Card>
                <Card 
                    imgSrc={campImage}
                    imgAlt="camping-project" 
                    title="YelpCamp"
                    description="Developed a full-stack web application with React, Node.js, Express, and MongoDB, enabling campground management with secure user authentication and deployment on Heroku."
                >
                    <Button 
                        visual="button" 
                        onClick={() => dialogRef.current.showModal()}
                        linkText="Subscribe"
                    />
                </Card>
                <Card 
                    imgSrc={chatbotImage}
                    imgAlt="chatbot-project"
                    title="Serverless Chatbot"
                    description="Built a serverless chat application using AWS services such as S3, Lambda, API Gateway, and DynamoDB, providing scalable real-time messaging with secure user authentication and cross-origin communication."
                >
                    <Button 
                        visual="button" 
                        onClick={() => dialogRef.current.showModal()}
                        linkText="Subscribe"
                    />
                </Card>
            </div>

            <dialog ref={dialogRef} className="demo-modal">
                <RegisterForm dialogRef={dialogRef} />
            </dialog>
        </div>
    );
}

export default Projects;
