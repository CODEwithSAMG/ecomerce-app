const PrivacyPolicy = () => {

    // const data = newDate()
    return (
        <div style={pageStyles}>
            <p style={headingStyles}>Privacy Policy</p>
            {/* <p>Last updated:{data}</p> */}

            <p className="contentStyles">Introduction</p>
            <p>Welcome to ApnaBazaar's Privacy Policy. This policy outlines how we collect, use, and protect your personal information.</p>

            <p className="contentStyles">Types of Personal Information We Collect</p>
            <p>As you engage with and navigate through our Services at ApnaBazaar, we may collect various types of personal information, tailored to your specific interactions and usage patterns.</p>
            <p>This collection occurs based on the nature of your engagement with us and the Services, and it aims to enhance your experience and provide you with a tailored and personalized platform.</p>
            <p>The personal information we gather may include, but is not limited to, details such as your name, email address, browsing activity, and other relevant data that enables us to offer you a comprehensive and valuable user experience.</p>
            <p>By understanding how you interact with our platform, we can better serve your needs, tailor our offerings to your preferences, and continuously improve our Services.</p>

            <p className="contentStyles">How We Use Your Personal Information</p>
            <p>The personal information we collect is utilized to optimize your experience on ApnaBazaar. We analyze this data to understand your preferences, enhance our product offerings, and provide you with personalized recommendations and content.</p>
            <p>Additionally, your personal information assists us in processing your orders, delivering customer support, and facilitating communication with you regarding your interactions with our Services.</p>
            <p>We may also leverage this information to deliver marketing communications, promotions, and updates that align with your interests, ensuring that you receive relevant and meaningful content.</p>
            <p>Furthermore, your personal information helps us assess and improve the effectiveness of our advertising strategies, allowing us to tailor advertisements and promotions to suit your preferences and previous interactions with our platform.</p>

            <p className="contentStyles">Third-Party Services and Personalization</p>
            <p>In order to enhance your experience and provide you with a range of functionalities, we may collaborate with third-party services. These partnerships can result in the sharing of certain personal information to facilitate seamless integrations and personalization.</p>
            <p>For instance, when utilizing Google AdSense for advertisements, specific personal information may be shared with Google to optimize the ads displayed to you based on your previous interactions with our Services and other websites.</p>
            <p>We remain committed to maintaining the security and integrity of your personal information when collaborating with third-party providers, and we encourage you to review the privacy policies of these partners to better understand how they handle your data.</p>


            <p className="contentStyles">Cookies and Tracking Technologies</p>
            <p>ApnaBazaar is committed to delivering an exceptional user experience while prioritizing your privacy. This section provides a detailed insight into our use of cookies, tracking pixels, and related technologies, ensuring that you're well-informed about their roles in enhancing our Services and optimizing your interaction with our platform.</p>

            <p className="contentStyles"><strong>Understanding Cookies</strong></p>
            <p>Cookies are small data files stored on your device, enhancing your online experience by remembering preferences and improving navigation. At ApnaBazaar, we leverage cookies to make your visit more seamless and personalized.</p>

            <p className="contentStyles"><strong>Our Use of Cookies</strong></p>
            <p>We employ session and persistent cookies to cater to your unique needs:</p>
            <ul>
                <li><strong>Session Cookies:</strong> These temporary cookies facilitate smooth navigation and maintain your session status during your visit, ensuring uninterrupted engagement.</li>
                <li><strong>Persistent Cookies:</strong> These cookies stay on your device for a specific period and enable us to remember your preferences across visits, contributing to a tailored experience.</li>
            </ul>

            <p className="contentStyles"><strong>Tracking Pixels and Analytical Insights</strong></p>
            <p>In addition to cookies, we utilize tracking pixels and advanced analytical tools. These technologies provide us with crucial insights into user behavior and interactions, helping us refine our content and design for better engagement.</p>

            <p className="contentStyles"><strong>Enhancing User Experience</strong></p>
            <p>By analyzing user patterns, we continually enhance our platform's layout, design, and functionality. This iterative process ensures that you enjoy a seamless and intuitive experience on ApnaBazaar.</p>

            <p className="contentStyles"><strong>Advertising and Personalization</strong></p>
            <p>Cookies are integral to our advertising strategy, as they enable us to tailor ads to your preferences. For instance, we analyze your browsing behavior to serve you ads that align with your interests, creating a more relevant and engaging experience.</p>

            <p> className="contentStyles"<strong>Your Control Over Cookies</strong></p>
            <p>Your privacy remains paramount. You have control over cookies through your browser settings. You can accept, decline, or delete cookies, though keep in mind that opting out may affect certain functionalities.</p>

            <p className="contentStyles"><strong>Opt-Out and Privacy Settings</strong></p>
            <p>We respect your choices. If you wish to manage cookies for personalized ads, refer to our <a href="/privacy-policy">Privacy Policy</a> for detailed guidance on opting out or adjusting preferences.</p>

            <p className="contentStyles"><strong>Contact Us</strong></p>
            <p>Your trust and satisfaction matter. If you have queries about cookies, tracking technologies, or your privacy on ApnaBazaar, please <a href="/contact">reach out</a>. We're dedicated to addressing your concerns and ensuring a secure, tailored experience.</p>

            <p className="contentStyles"><strong>Your Privacy, Our Priority</strong></p>
            <p>Rest assured, ApnaBazaar is committed to maintaining the highest standards of privacy and user experience. Our usage of cookies and tracking technologies is designed to benefit you while respecting your choices and privacy preferences.</p>



            <h2>California Privacy Rights Act (CPRA)</h2>
            <p>If you are a resident of California, you have certain rights under the California Privacy Rights Act (CPRA). These rights include:</p>
            <ul>
                <li>The right to know what personal information we collect and why.</li>
                <li>The right to access your personal information.</li>
                <li>The right to request the deletion of your personal information.</li>
                <li>The right to opt out of the sale of your personal information.</li>
                <li>The right to opt out of the use of sensitive personal information for advertising and marketing purposes.</li>
            </ul>
            <p>We are committed to respecting your rights under the CPRA and ensuring that your personal information is handled securely and in accordance with the law.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or your rights under the CPRA, please contact us at [your contact information].</p>

            <p>This Privacy Policy page was generated by [Your Name] at ApnaBazaar.</p>
        </div>
    );
};

export default PrivacyPolicy;

const pageStyles = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    // color: 'rgb(104, 85, 224)',
    padding: '0 10rem',
    marginTop: "2rem",
    marginBottom: "4rem",
};

const headingStyles = {
    color: 'rgb(104, 85, 224)',
    textAlign: "center",
    fontSize: "1.4rem",
    fontWeight: 600

};
