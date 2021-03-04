import React from 'react'
import { About } from '../Components'
import { Link } from 'react-scroll'
import LinkMenu from '../Components/about/LinkMenu'

export function AboutContainer() {

    return (
        <About>
            <About.Container>
                <About.Quote id="quote">
                    <About.Title>“Your legal minds with a personal touch”</About.Title>
                </About.Quote>
                <About.Wrapper>
                    <About.Sidebar>

                        <LinkMenu />

                    </About.Sidebar>
                    <About.DocWrapper>
                        <h2 name="about">ABOUT US</h2>
                        <h3 name="WhoWeAre">Who we are?</h3>
                        <p className="body">NN Legal Consulting is a well-established, fully black-owned and small-sized business and law consultancy practice with prospective national capacity through network of qualified and well capacitated professionals, enabling us substantial influence throughout the country. Our services range is clustered into Legal Consulting as well as Enterprise Consulting, where we offer fully customized professional and efficient services to our diverse business clients (b2b), individuals from all walks of life and public sector organisations.</p>

                        <h3 name="OurClients">Our clients?</h3>
                        <p className="body">Business to business clients include law firms where we provide them with support services ranging from dedicated correspondence services, companies that operates within communities where there are existing or potential conflicts or environmental issues, general business where we provide legal assistance related to operations, transitions and transactions.<br /><br />
                        Individual clients who are given full legal assistance internally and through our panel where we save them time and money through pre-consultations and predetermine their matters and the exact practitioner required and solutions without incurring unnecessary costs of pillar to posts. <br /><br />
                        Public Sector Organisations or the government units serve a broad mandate to a broad stakeholder and thus faces lot of costly deficiencies and opposition with stricter accountability. Our anticipated role to this sector is that of offering one stop solutions including legal assistance, applied research and partnering in planning, executing and evaluating intervention programs.
</p>
                        <h3 name="CorporateCitizenship?">Corporate citizenship?</h3>
                        <p className="body">As an entity that operates within the legal fraternity we believe that we have more responsibility to adhere to and a role to play in promoting ethical behaviour and social responsibility. We aim to facilitate and promote youth empowerment and access to justice for the vulnerable communities as a form of poverty resistance and eradication. Our alliance with the Flowers of Hope foundation exists in order to facilitate mass engagement and collaboration in ensuring that our vision for a broadly accessible platform where structured programmes will be planned, funded, executed and evaluated is achieved.</p>
                        <h3 name="OurFocus&Approach?">Our focus and approach?</h3>
                        <p className="body">NN legal Consulting is a customer-oriented company willing to tailor make most, if not all its services to provide rapid response to its clients. This innovation is achieved through swift response through our panel of qualified and experienced practitioners providing relevant and outstanding skills and expertise in order to ensure that the solutions we provide are efficient and geared up-to our reputation standards.</p>
                        <h2 name="WHY-CHOOSE-US">WHY CHOOSE US</h2>
                        <h3 name="OurCorrespondentServices">Our Correspondent services: </h3>
                        <ul>
                            <li>Efficient, cost-effective and accurately executed.</li>
                            <li>We have a fully dedicated correspondence services office and we specialize in it </li>
                            <li>We provide peace of mind through a flexible rapid correspondent team which you can always have in your speed dial.</li>
                            <li>We have a well capacitated multidisciplinary and professional team.</li>
                            <li>We save your firm from taxes, employees benefits and or human resource issues.</li>
                            <li>Our arrangement and contracts enables flexibility on work scopes, scalability of activities and reasonable termination when no longer required.</li>
                        </ul>
                        <h3 name="OurLegalServices">Our Legal services</h3>
                        <ul>
                            <li>We provide peace of mind through a flexible rapid correspondent team which you can always have in your speed dial.</li>
                            <li>We have a well capacitated multidisciplinary and professional team.</li>
                        </ul>
                        <h3 name="OurEnterpriseServices">Our Enterprise Services</h3>
                        <ul>
                            <li>We are a results-driven and well-resourced business, we invest in talent, processes and technology as key fundamentals into delivering innovative solutions to our clients. </li>
                            <li>Our solutions mitigate losses, increase revenues, ensure support, develop plans and visions into life and we aim to deliver to our clients’ satisfaction.</li>
                        </ul>
                        <h2 name="EXPERTISE">EXPERTISE</h2>
                        <h3 name="CorrespondentServices">Correspondent Services:</h3>
                        <p>Our correspondent services are cost effective, efficient and accurately executed having necessary regard and detail to the instruction of the instructing attorney. <br /><br />Our core services include:</p>
                        <ul>
                            <li>Urgent same day issuing of documents</li>
                            <li>Normal issuing of documents</li>
                            <li>Delivery of documents to the sheriff for service</li>
                            <li>Issuing of action and application matters</li>
                            <li>Drawing, preparation and drafting of court files </li>
                            <li>Receipt of service of documents</li>
                            <li>Filing of pleadings and relevant court processes</li>
                            <li>Providing the instructing attorney with all documents, issued and served within 48 hours</li>
                            <li>Attending to court for all non-appearance purposes</li>
                            <li>Attending to court to apply for trial or motion court dates</li>
                            <li>Furnishing regular and prompt progress status updates.</li>
                            <li>Urgent matters</li>
                            <li>Attending to court for appearance purpose and litigation (MC & HC)</li>
                        </ul>
                        <h3 name="FamilyLaw">Family Law</h3>
                        <p>Family law regulates relations between family members whether blood related or became related by adoption, marriage, civil union or similar relationship. Our team has expertise in a wide spectrum of Family Law matters, including drafting Ante-nuptial and Post-nuptial agreements, Divorce proceedings, settlement agreements, maintenance proceedings and domestic violence proceedings.</p>
                        <h3 name="TrustsWillsAndEstates">Trusts, Wills And Estates</h3>
                        <p>Our compassionate and experienced team has the tools and are equipped to assist our clients get their affairs in order. We understand that death is inevitable and that during such times our clients expect an ease of mind in order to grieve in peace. Our core services include drafting of and advice on wills and trusts, winding-up of estates, estate planning while remaining considerate and sensitive to the loss of a loved on.</p>
                        <h3 name="EmploymentLaw">Employment Law</h3>
                        <p>Employment law regulates the many aspects of the relationship between employers and their associations and employees and trade unions. We provide a wide range of labour law services including representing our clients in enquiries, mediations, arbitrations and litigation in the CCMA, Bargaining Councils and the Labour Court, drafting and interpretation of employment contracts.</p>
                        <h3 name="CommercialAndCorporateLaw">Commercial And Corporate Law</h3>
                        <p>Our corporate and commercial law team is well equipped and business-minded. We are committed to giving specialized advice and drafting contracts which are clear and with little to no incomprehensible legal jargon while adhering to our pledge to remain professional. Our core services include Corporate Governance, Mergers and acquisitions, Business Rescue, Liquidations, Risk management to avoid liquidation, advice regarding a recovery strategy, in the event of financial strain, and propose funding solutions, establishing and implementation of a revised and chosen financial restructuring plan, Intellectual property law, Due Diligence, Property Law agreements, Labour Contracts and lease and/or sale contracts.</p>
                        <h3 name="PropertyLaw">Property Law</h3>
                        <p>We provide drafting of sale and lease agreement services, handle transfers of properties, register bonds for banks and private clients, draft servitudes, insolvent and deceased estate transfers, property development consulting, due diligence investigations and property investment feasibility studies.</p>
                        <h2 name="ENTERPRISE-SERVICES">ENTERPRISE SERVICES</h2>
                        <h3 name="SocialEngagement">Social Engagement Facilitation (Accredited)</h3>
                        <p>It is essential for government and private sector to ensure that social engagement facilitation and stakeholder engagement takes place before implementation of any responsible project or social effective programme as a mean of good governance and thus to ensure positive impact, stakeholder cooperation and maximized effectiveness. <br /><br />
                        NN Legal Consulting offers professional and accredited Social Engagement Facilitation services ensuring that there is adequate social facilitation and stakeholder engagement (social engagement) in order to ensure seamless execution of projects and programmes and a total buy in from all social partners. Key stakeholders includes government, civil society, private sector and labour where there’s a need for a factual based mutual trust and common ground.
</p>
                        <h3 name="R&D">Rerseach And Development Services (R&D)</h3>
                        <p>We have a dynamic multi-disciplinary team comprising of internal and external specialists who are equipped to initiate the entire research and development project cycles, from planning, implementation and administration up to closure delivering highly innovative, cost-effective and high quality research and development solutions for our clients. Our key strength is the ability to transform a strategy into action with measurable results. <br /><br />Core services include : Program Development (also Turnkeys)</p>
                        <ul>
                            <li>Applied Research & Analysis pertaining: local & global socioeconomic surveys, emergent policy issues, performance capacity limitations and problems in the sectors</li>
                            <li>Impact (and incidents) assessments</li>
                            <li>Policy & Charters Elucidation and Administration</li>
                            <li>Concept Design, Planning and Profiling</li>
                            <li>Stakeholder Coordination and Cohesion (facilitating mediations)</li>
                            <li>Resource Mobilization </li>
                        </ul>
                        <p>Project Research Administration and Development (also Turnkeys)</p>
                        <ul>
                            <li>Feasibility study</li>
                            <li>Project Planning</li>
                            <li>Project Lifecycle Management</li>
                            <li>Interventions (Rescue efforts for gaps, crisis and deficiencies)</li>
                            <li>Process developments and optimisations</li>
                        </ul>

                        <p>-	Operation optimisation (also Turnkeys)</p>
                        <ul>
                            <li>Process Optimisation (lean alignment) </li>
                            <li>Interventions & Value for Customer creation (Identifying gaps and implementing Rescue efforts for gaps, crisis and deficiencies) e.g. customers stock returns / failed deliveries vs. customer services = customer oriented operation solution</li>
                            <li>Sweet Spot Migration  </li>
                        </ul>
                        <h3 name="acquisition">Mergers & Acquisition Consulting</h3>
                        <p>Business Diversification (also through acquiring of existing businesses)</p>
                        <ul>
                            <li>New markets</li>
                            <li>New products and or services </li>
                            <li>Streamlining</li>
                        </ul>

                        <p>Portfolio Profiling, Administration and Management</p>
                        <p>Developing Supply-Chains</p>
                        <ul>
                            <li>Optimised Strategic Sourcing for one or more companies or departments that is aimed at enhanced buying power </li>
                        </ul>

                        <p>Developing Value-Chains</p>
                        <ul>
                            <li>Strategic Business Units Consolidation aimed at enhanced economics of scale gains and efficiency </li>
                            <li>Shielding Ideas / Ventures</li>
                            <li>Critique Reviews</li>
                            <li>Advisory, Representation and Mentorship</li>
                        </ul>
                        <p>Drafting of merger agreements.</p>
                        <p>Statutory compliance in the event of imminent Mergers.</p>
                        <p>Application for Merger Approvals.</p>
                        <h3 name="SkillsDevelopment">Skills Development</h3>
                        <p>NN Legal Consulting is a firm that believes in justice and equality and believes that one of the fundamental justice solutions is addressing the country’s ills including Unemployment, economic exclusion, Drug abuse, Unplanned pregnancies through robust interventions into skills development and effectiveness by facilitating various levels of collaborations with government, business sectors, education and training sectors, and other relevant stakeholders. <br /><br />
These consolidated efforts will lead to a development of clearly defined skills needed by the markets which will assist in restructuring the curriculums by the learning institutions and also convince the industries to open doors for practical skills trainings as well as mobilize government to structure appropriate funding for skills development.
</p>
                        <h3 name="CommercialPractice">Commercial Practice</h3>
                        <p>We assist clients with all commercial and corporate aspects of their business. Commercial transactions are the heartbeat of the firm and the majority of our panel of attorneys are primarily involved in assisting clients with a wide variety of commercial transactions. Our services are not limited to the drafting and settlement of a composite range of commercial contracts but also include advising on the tax and other implications of commercial transactions, conducting due diligence investigations, advising on the implication of Broad-Based Black Economic Empowerment and assisting with the implementation of commercial transactions.</p>
                        <h3 name="Secretarial">Company & Secretarial Services</h3>
                        <p>Company secretarial services have been redefined in the modern corporate world and it just does not end with filing and corresponding but also includes statutory compliance issues which form the foundation of and determines the direction of any company. We cover a full spectrum of secretarial services including:</p>
                        <ul>
                            <li>company registrations</li>
                            <li>company law compliance</li>
                            <li>company records, assurance</li>
                            <li>Annual General Meeting</li>
                            <li>Advisory Role</li>
                            <li>Tasks Completion</li>
                            <li>Planning and administrative services in respect of trusts and estates</li>
                            <li>The formation of trusts</li>
                            <li>Appointment as an independent trustee on our clients’ trusts</li>
                            <li>The formation and conversion of companies and close corporations</li>
                            <li>The company secretarial implementation of shareholders’ and members’ agreements, and </li>
                            <li>Submissions to and communication with the Masters of High Court, the Registrar of Companies and Close Corporations (CIPC).</li>
                        </ul>
                    </About.DocWrapper>
                </About.Wrapper>
            </About.Container>
        </About >
    )
}