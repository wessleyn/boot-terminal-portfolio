export default function PrivacyPage() {
    return (
        <div className="col-md-8 offset-md-1">
            <div className="row">
                <div className="col">
                    <h2 className="fs-3 fw-bold text-primary terminal-cursor">$ cat ~/privacy.txt</h2>
                    <div className="mb-5 terminal-content">
                        <h3 className="fs-5 fw-bold text-primary">Privacy Policy</h3>
                        <p className="text-muted">Last Updated: April 16, 2025</p>
                        <p>This Privacy Policy describes how your personal information is collected, used, and
                            shared when you visit wessleyn.me (the &quot;Site&quot;).</p>

                        <h4 className="fs-5 fw-bold text-primary">Personal Information We Collect</h4>
                        <p>When you visit the Site, we automatically collect certain information about your
                            device, including information about your web browser, IP address, time zone, and
                            some of the cookies that are installed on your device.</p>
                        <p>Additionally, as you browse the Site, we collect information about the individual web
                            pages that you view, what websites or search terms referred you to the Site, and
                            information about how you interact with the Site. We refer to this
                            automatically-collected information as &quot;Device Information.&quot;</p>

                        <h4 className="fs-5 fw-bold text-primary">How We Collect Device Information</h4>
                        <p>We collect Device Information using the following technologies:</p>
                        <ul>
                            <li>&quot;Cookies&quot; are data files that are placed on your device or computer and often
                                include an anonymous unique identifier.</li>
                            <li>&quot;Log files&quot; track actions occurring on the Site, and collect data including your
                                IP address, browser type, Internet service provider, referring/exit pages, and
                                date/time stamps.</li>
                        </ul>

                        <h4 className="fs-5 fw-bold text-primary">Contact Form Information</h4>
                        <p>When you use the contact form on our Site, we collect the personal information you
                            provide, such as your name, email address, and any other information you include in
                            your message. We refer to this information as &quot;Contact Information.&quot;</p>
                        <p>When we talk about &quot;Personal Information&quot; in this Privacy Policy, we are talking both
                            about Device Information and Contact Information.</p>

                        <h4 className="fs-5 fw-bold text-primary">How We Use Your Personal Information</h4>
                        <p>We use your Contact Information to communicate with you, respond to your inquiries,
                            and provide you with information or services that you request from us.</p>
                        <p>We use the Device Information that we collect to help us screen for potential
                            security issues and improve and optimize our Site (for example, by analyzing user
                            navigation patterns and generating analytics about how our users browse and interact
                            with the Site).</p>

                        <h4 className="fs-5 fw-bold text-primary">Sharing Your Personal Information</h4>
                        <p>We share your Personal Information with third parties to help us use your Personal
                            Information, as described above. For example:</p>
                        <ul>
                            <li>We use Formspree to process contact form submissions.</li>
                            <li>We use Cloudflare Turnstile for CAPTCHA verification to prevent spam.</li>
                            <li>We use Simple Analytics to help us understand how our customers use the Site.</li>
                        </ul>
                        <p>We may also share your Personal Information to comply with applicable laws and
                            regulations, to respond to a subpoena, search warrant, or other lawful request for
                            information we receive, or to otherwise protect our rights.</p>

                        <h4 className="fs-5 fw-bold text-primary">Do Not Track</h4>
                        <p>We respect Do Not Track signals from your browser and use analytics services (Simple Analytics)
                            that do not track you across websites.</p>

                        <h4 className="fs-5 fw-bold text-primary">Data Retention</h4>
                        <p>When you submit a contact form through the Site, we will maintain your Contact
                            Information for our records unless and until you ask us to delete this information.
                        </p>

                        <h4 className="fs-5 fw-bold text-primary">Changes</h4>
                        <p>We may update this privacy policy from time to time in order to reflect, for example,
                            changes to our practices or for other operational, legal, or regulatory reasons.</p>

                        <h4 className="fs-5 fw-bold text-primary">Contact Us</h4>
                        <p>For more information about our privacy practices, if you have questions, or if you
                            would like to make a complaint, please contact us by e-mail at <a
                                href="mailto:privacy@wessleyn.me">privacy@wessleyn.me</a>.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}