
const Blogs = () => {
    return (
        <div>
            {/* 1 */}
            <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>An access token and a refresh token are commonly used in authentication and authorization protocols to grant and manage access to protected resources</p>
                    <h4 className="font-bold text-2xl">How do they work and where should we store them on the client-side</h4>

                    <p><span className="font-bold text-2xl">Access tokens:</span> These tokens are short-lived and should be stored in memory or a secure storage mechanism provided by the operating system or browser, such as session storage or HTTP-only cookies. Storing them in memory is generally more secure since it reduces the risk of token leakage if the client is compromised. <br />

                        <span className="font-bold text-2xl"> Refresh tokens:</span> Since refresh tokens have a longer lifespan and are used to obtain new access tokens, they need to be stored securely. It is recommended to store them in a secure HTTP-only cookie or a secure storage mechanism provided by the operating system. These storage mechanisms help protect against cross-site scripting (XSS) attacks and make it harder for malicious scripts to access the refresh token.</p>
                </div>
            </div>
            {/* 2 */}
            <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>SQL has minor variations across different relational databases, but maintains a high degree of consistency across all of them. Flavors of NoSQL vary far more across their attendant systems, so comparison can be more useful between multiple non-relational technologies vs. SQL generally.Perhaps the most widely used relational database dialect is MySQL, an open-source, free RDBMS though available through proprietary licenses as well. Its widely used in web applications, and it is known for compatibility, support, and good performance in the average case. MySQL has also made concessions to NoSQL practitioners with features such as a JSON data type, the “Document Store,” and support for sharding horizontal scaling.</p>
                </div>
            </div>
            {/* 3 */}
            <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>
                        <span className="text-2xl font-bold">Express js</span> is a popular web application framework for Node.js, designed to simplify the process of building web applications and APIs. It provides a minimalist and flexible set of features that enable developers to create robust and scalable server-side applications.
                    </p>
                    <p>
                        <span className="text-2xl font-bold">Nest JS is</span> a progressive and opinionated framework for building efficient and scalable server-side applications with Node.js. It combines elements of Object-Oriented Programming (OOP), Functional Programming (FP), and Reactive Programming to provide a robust and modular structure for developing server-side applications.
                    </p>
                </div>
            </div>
            {/* 4 */}
            <div className="collapse my-4">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Mongo DB is aggregation framework is a powerful tool for performing advanced data analysis and manipulation on collections of documents. It allows you to process and transform data, perform calculations, apply filtering, and generate aggregated results.

                        The aggregation framework in MongoDB operates on the concept of a pipeline. A pipeline consists of multiple stages, each representing a specific operation or transformation to be applied to the documents. The output of one stage serves as the input for the next stage, allowing for a series of operations to be performed sequentially.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;