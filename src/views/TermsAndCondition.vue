<script setup>
import {useRouter} from "vue-router";
const router = useRouter();

const goToLogin = () => {
  router.push("/login");
};
</script>

<template>
  <div class="bg-black text-white flex items-center justify-center min-h-screen">
    <div class="w-full m-5 gradient-content">
      <AuthLogo />
      <h1 class="text-center !text-3xl mb-4">Privacy Policy</h1>
      <div>
        <p class="text-center">By continuing you agree to the <b class="text-green-brand">Terms & Conditions</b> stated below.</p>
        <span class="h-[1px] w-[50px] bg-green-brand mx-auto mt-8 mb-8 block"></span>
      </div>

      <div class="flex flex-col gap-5 justify-center text-center">
        <div class="max-w-[700px] mx-auto w-full p-3 rounded-3xl border-[0.5px] border-[#DEE4CD] white-06">
          <div class="w-full p-4 rounded-2xl white-06">
            <h2 class="text-white !text-3xl">Terms & Conditions</h2>
            <p class="text-[#A0A2A8] text-sm mt-2">Last updated 23rd April 2026</p>
          </div>
          <div class="h-[500px] !overflow-y-scroll text-left px-4 md:px-7 my-9 auth-scrollbar prose pros-auth">
            <body>
              <h1>Terms of Service &amp; Platform Use Agreement</h1>

              <p><strong>Company:</strong> Zenif is software name Company trading as Gud Ideas (“Company”, “we”, “us”, “our”, “processor”)</p>
              <p><strong>Controller:</strong> Customer</p>

              <h2>1. Binding Agreement</h2>
              <p>By accessing, registering for, or using the platform (“Service”), whether as a customer, employee, contractor, or authorised user (“User”), you agree to be legally bound by these Terms.</p>
              <p>If you are using the Service on behalf of a business, you confirm you have authority to bind that entity.</p>

              <h2>2. Nature of the Service</h2>
              <p>The Service is a cloud-based CRM and business operations platform provided strictly on an <strong>“as-is” and “as-available”</strong> basis.</p>
              <p>We do not guarantee:</p>
              <ul>
                <li>Continuous availability</li>
                <li>Error-free performance</li>
                <li>Data preservation or recovery</li>
              </ul>

              <h2>3. User Roles</h2>
              <p>The platform may be used by:</p>
              <ul>
                <li>External clients and their staff</li>
                <li>Our internal employees and contractors</li>
              </ul>
              <p><strong>All users are individually and fully responsible for their actions within the system.</strong></p>
              <p>Internal use does NOT create additional liability for the Company toward external users.</p>

              <h2>4. Data Control, Responsibility &amp; Compliance</h2>

              <h3>4.1 Customer Responsibility</h3>
              <p>You are solely responsible for:</p>
              <ul>
                <li>All data uploaded, stored, or processed</li>
                <li>Ensuring compliance with applicable laws (including UK GDPR)</li>
                <li>Obtaining all required consents</li>
                <li>Maintaining your own privacy policies</li>
              </ul>

              <h3>4.2 No Verification Obligation</h3>
              <p>We do not:</p>
              <ul>
                <li>Verify legality of data</li>
                <li>Monitor compliance</li>
                <li>Act as a data controller for your business operations</li>
              </ul>

              <h3>4.3 Data Risk Acknowledgement</h3>
              <p>You acknowledge that:</p>
              <ul>
                <li>Data may be lost, corrupted, or accessed without authorisation</li>
                <li>You are responsible for maintaining independent backups where necessary</li>
              </ul>

              <h2>5. Internal Staff Access &amp; Misuse</h2>
              <ul>
                <li>Our staff may access the system for support, maintenance, and operational purposes</li>
                <li>Staff are bound by internal confidentiality and data handling obligations</li>
              </ul>
              <p>However:</p>
              <ul>
                <li>We are not liable for isolated human error, misuse, or unauthorised acts <strong>unless required by law</strong></li>
                <li>You accept the inherent risk of human interaction with systems</li>
              </ul>

              <h2>6. Access Management &amp; Third Parties</h2>
              <p>You are fully responsible for:</p>
              <ul>
                <li>Granting and revoking access</li>
                <li>Role permissions</li>
                <li>Actions of employees, contractors, or third parties</li>
              </ul>
              <p><strong>All activity under your account is deemed authorised by you.</strong></p>

              <h2>7. Acceptable Use Restrictions</h2>
              <p>You must not:</p>
              <ul>
                <li>Upload unlawful, harmful, or infringing data</li>
                <li>Use the system to violate privacy laws</li>
                <li>Attempt to disrupt or exploit the platform</li>
              </ul>
              <p>We reserve the right to suspend or terminate accounts without notice.</p>

              <h2>8. Fees, Charges &amp; Commercial Terms</h2>
              <ul>
                <li>The Service may be subscription-based or usage-based</li>
                <li>We may introduce or change pricing at any time with notice</li>
                <li>
                  Additional charges may apply for:
                  <ul>
                    <li>Storage usage</li>
                    <li>Premium features</li>
                    <li>Support services</li>
                  </ul>
                </li>
              </ul>
              <p>Failure to pay may result in immediate suspension or termination.</p>
              <p>All payments are:</p>
              <ul>
                <li>Non-refundable</li>
                <li>Exclusive of taxes unless stated otherwise</li>
              </ul>

              <h2>9. Service Availability &amp; Failures</h2>
              <p>We expressly disclaim liability for:</p>
              <ul>
                <li>System outages</li>
                <li>Downtime</li>
                <li>Bugs or errors</li>
                <li>Data loss or corruption</li>
                <li>Delays in service</li>
              </ul>
              <p>You agree that the Service is <strong>not guaranteed infrastructure</strong> and should not be solely relied upon for critical operations.</p>

              <h2>10. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <p>We shall not be liable for:</p>
              <ul>
                <li>Loss of profits</li>
                <li>Loss of business</li>
                <li>Loss of data</li>
                <li>Reputational damage</li>
                <li>Indirect or consequential losses</li>
              </ul>
              <p><strong>Total liability is capped at the greater of:</strong></p>
              <ul>
                <li>Fees paid in the last 12 months, OR</li>
                <li>£1,000</li>
              </ul>
              <p>Nothing in these Terms excludes liability that cannot legally be excluded.</p>

              <h2>11. Indemnity</h2>
              <p>You agree to fully indemnify and defend us against any claims arising from:</p>
              <ul>
                <li>Your data</li>
                <li>Your misuse of the Service</li>
                <li>Breach of laws or regulations</li>
                <li>Claims from your customers or employees</li>
              </ul>
              <p>This includes legal costs and damages.</p>

              <h2>12. Security Disclaimer</h2>
              <p>While we implement reasonable safeguards:</p>
              <ul>
                <li>No system is secure</li>
                <li>Cyber risks are inherent</li>
              </ul>
              <p>We are not liable for:</p>
              <ul>
                <li>Breaches beyond our reasonable control</li>
                <li>Third-party attacks</li>
                <li>User negligence</li>
              </ul>

              <h2>13. Data Retention &amp; Deletion</h2>
              <ul>
                <li>We may retain data for backups, legal compliance, or operational needs</li>
                <li>We are not obligated to restore deleted data</li>
                <li>Data may be permanently deleted upon termination</li>
              </ul>

              <h2>14. Suspension &amp; Termination</h2>
              <p>We may suspend or terminate access:</p>
              <ul>
                <li>Without notice</li>
                <li>For any breach or risk</li>
                <li>For non-payment</li>
              </ul>
              <p>We are not liable for any resulting losses.</p>

              <h2>15. Changes to Service &amp; Terms</h2>
              <p>We may:</p>
              <ul>
                <li>Modify or discontinue the Service</li>
                <li>Update Terms at any time</li>
              </ul>
              <p>Continued use constitutes acceptance.</p>

              <h2>16. Governing Law</h2>
              <p>These Terms are governed by the laws of England and Wales.</p>

              <hr />

              <h1>Internal Use Addendum (For Staff)</h1>
              <p>All employees and contractors must:</p>
              <ul>
                <li>Use the system strictly for authorised business purposes</li>
                <li>Not access data outside their role</li>
                <li>Maintain strict confidentiality</li>
                <li>Follow internal data protection policies</li>
              </ul>
              <p>Any misuse may result in:</p>
              <ul>
                <li>Disciplinary action</li>
                <li>Termination</li>
                <li>Legal action</li>
              </ul>

              <hr />

              <h1>Privacy Policy</h1>

              <h2>Role Clarification</h2>
              <ul>
                <li>We act as a <strong>data processor</strong> for customer data</li>
                <li>Customers remain the <strong>data controllers</strong></li>
              </ul>

              <h2>Customer Obligations</h2>
              <p>Customers must:</p>
              <ul>
                <li>Respond to data subject requests</li>
                <li>Ensure lawful processing</li>
                <li>Provide privacy notices</li>
              </ul>

              <h2>Liability Position</h2>
              <p>We are not responsible for:</p>
              <ul>
                <li>Customer misuse of personal data</li>
                <li>Failure to comply with legal obligations</li>
              </ul>

              <hr />

              <h1>Data Processing Agreement (DPA)</h1>
              <p><strong>This DPA forms part of the Terms of Service</strong></p>

              <h2>1. Scope &amp; Roles</h2>
              <ul>
                <li>The Customer acts as <strong>Data Controller</strong></li>
                <li>We act as <strong>Data Processor</strong></li>
              </ul>
              <p>We process personal data <strong>only on documented instructions</strong> from the Customer.</p>

              <h2>2. Nature of Processing</h2>
              <p>We process data to:</p>
              <ul>
                <li>Provide the CRM platform</li>
                <li>Store and organise business data</li>
                <li>Enable user access and workflows</li>
                <li>Provide support and maintenance</li>
              </ul>
              <p>Categories of Data May Include:</p>
              <ul>
                <li>Customer/client records</li>
                <li>Employee data</li>
                <li>Contact details</li>
                <li>Business information</li>
              </ul>

              <h2>3. Customer Obligations</h2>
              <p>The Customer warrants that it:</p>
              <ul>
                <li>Has lawful basis for processing under UK GDPR</li>
                <li>Has provided all required privacy notices</li>
                <li>Has obtained necessary consents</li>
              </ul>
              <p><strong>The Customer is solely responsible for:</strong></p>
              <ul>
                <li>Data accuracy</li>
                <li>Data legality</li>
                <li>Responding to data subject requests</li>
              </ul>

              <h2>4. Processor Obligations</h2>
              <p>We will:</p>
              <ul>
                <li>Process data only per instructions</li>
                <li>Implement reasonable technical and organisational measures</li>
                <li>Ensure staff are bound by confidentiality</li>
              </ul>

              <h2>5. Sub-processors</h2>
              <ul>
                <li>We may appoint sub-processors (e.g. cloud providers)</li>
                <li>The Customer authorises use of sub-processors</li>
                <li>We remain responsible for their compliance</li>
              </ul>

              <h2>6. Security Measures</h2>
              <p>We implement safeguards such as:</p>
              <ul>
                <li>Access controls</li>
                <li>Encryption (where appropriate)</li>
                <li>Monitoring and logging</li>
              </ul>
              <p>However:</p>
              <ul>
                <li>No system is completely secure</li>
                <li>The Customer accepts residual risk</li>
              </ul>

              <h2>7. Data Breach</h2>
              <p>In the event of a personal data breach, we will:</p>
              <ul>
                <li>Notify the Customer without undue delay</li>
                <li>Provide reasonable information available</li>
              </ul>
              <p><strong>We are not responsible for:</strong></p>
              <ul>
                <li>Customer reporting obligations</li>
                <li>Regulatory filings</li>
              </ul>

              <h2>8. International Transfers</h2>
              <p>Data may be transferred outside the UK where necessary.</p>
              <p>We will ensure appropriate safeguards (e.g. standard contractual clauses where required).</p>

              <h2>9. Data Subject Requests</h2>
              <ul>
                <li>We provide reasonable assistance where feasible</li>
                <li>The Customer remains fully responsible for handling requests</li>
              </ul>

              <h2>10. Data Retention &amp; Deletion</h2>
              <ul>
                <li>Data is retained as required to provide the Service</li>
                <li>Upon termination, data may be deleted within a reasonable timeframe</li>
                <li>Backups may persist temporarily</li>
              </ul>
              <p>We are not liable for data loss following deletion.</p>

              <h2>11. Liability</h2>
              <p>This DPA is subject to the liability limitations in the Terms of Service.</p>

              <h2>12. Audit Rights</h2>
              <ul>
                <li>Audits are limited to reasonable requests</li>
                <li>Must not disrupt operations</li>
                <li>May be subject to fees</li>
              </ul>

              <hr />

              <h1>Service Level Agreement (SLA)</h1>
              <p><strong>This SLA forms part of the Terms of Service</strong></p>

              <h2>1. Service Availability Target</h2>
              <p>We aim (but do not guarantee) <strong>99.5% uptime</strong> per calendar month.</p>
              <p><strong>Important:</strong> This is a <strong>target, not a guarantee</strong>.</p>

              <h2>2. Exclusions from Uptime</h2>
              <p>Downtime does NOT include:</p>
              <ul>
                <li>Scheduled maintenance</li>
                <li>Emergency maintenance</li>
                <li>Force majeure events</li>
                <li>Third-party failures (e.g. hosting providers, internet outages)</li>
                <li>Customer misuse or configuration issues</li>
              </ul>

              <h2>3. Support Levels</h2>
              <h3>Standard Support</h3>
              <ul>
                <li>Response time: within 48 hours</li>
                <li>Business hours only</li>
              </ul>
              <h3>Priority Support (if purchased)</h3>
              <ul>
                <li>Faster response times</li>
                <li>Priority handling</li>
              </ul>

              <h2>4. Incident Handling</h2>
              <p>We will:</p>
              <ul>
                <li>Use reasonable efforts to resolve issues</li>
                <li>Prioritise critical system failures</li>
              </ul>
              <p>We do NOT guarantee:</p>
              <ul>
                <li>Fix times</li>
                <li>Immediate resolution</li>
              </ul>

              <h2>5. Maintenance</h2>
              <p>We may perform:</p>
              <ul>
                <li>Scheduled maintenance</li>
                <li>Emergency maintenance</li>
              </ul>
              <p>This may result in temporary service disruption.</p>

              <h2>6. Service Credits</h2>
              <p>If uptime falls significantly below target:</p>
              <ul>
                <li>Customers <strong>may request</strong> service credits</li>
                <li>
                  Credits are:
                  <ul>
                    <li>Discretionary</li>
                    <li>Capped at 1 month’s fees</li>
                    <li>The sole and exclusive remedy</li>
                  </ul>
                </li>
              </ul>
              <p>No cash refunds will be provided.</p>

              <h2>7. Customer Responsibilities</h2>
              <p>Customers must:</p>
              <ul>
                <li>Maintain their own backups if required</li>
                <li>Use the system appropriately</li>
                <li>Report issues promptly</li>
              </ul>

              <h2>8. No Warranty</h2>
              <p>This SLA does not create:</p>
              <ul>
                <li>Any guarantee of availability</li>
                <li>Any contractual warranty beyond the Terms</li>
              </ul>

              <h2>9. Liability Limitation</h2>
              <p>All SLA obligations are subject to the liability caps in the Terms of Service.</p>

              <hr />

              <h1>Acceptable Use Policy (AUP)</h1>
              <p><strong>This Policy forms part of the Terms of Service</strong></p>

              <h2>1. Purpose</h2>
              <p>This Acceptable Use Policy defines permitted and prohibited uses of the platform (“Service”) by all users, including customers, their staff, and our internal personnel.</p>

              <h2>2. Prohibited Activities</h2>
              <p>Users must NOT use the Service to:</p>

              <h3>2.1 Illegal Use</h3>
              <ul>
                <li>Violate any applicable laws or regulations (including UK GDPR and the Data Protection Act 2018)</li>
                <li>Process unlawful, harmful, or fraudulent data</li>
              </ul>

              <h3>2.2 Data Misuse</h3>
              <ul>
                <li>Upload data without proper legal basis or consent</li>
                <li>Process sensitive data unlawfully</li>
                <li>Infringe intellectual property or privacy rights</li>
              </ul>

              <h3>2.3 System Abuse</h3>
              <ul>
                <li>Attempt to hack, disrupt, or overload the platform</li>
                <li>Reverse engineer or probe vulnerabilities</li>
                <li>Circumvent access controls or security measures</li>
              </ul>

              <h3>2.4 Unauthorised Access</h3>
              <ul>
                <li>Access data without proper authorisation</li>
                <li>Share login credentials</li>
                <li>Allow unauthorised third parties to use the system</li>
              </ul>

              <h3>2.5 Harmful Conduct</h3>
              <ul>
                <li>Distribute malware or malicious code</li>
                <li>Use the system for harassment, abuse, or exploitation</li>
              </ul>

              <h2>3. Responsibility for Users</h2>
              <p>Customers are fully responsible for:</p>
              <ul>
                <li>All users they grant access to</li>
                <li>All actions taken under their account</li>
                <li>Ensuring internal compliance and training</li>
              </ul>

              <h2>4. Monitoring &amp; Enforcement</h2>
              <p>We may (but are not obligated to):</p>
              <ul>
                <li>Monitor usage</li>
                <li>Investigate violations</li>
              </ul>
              <p>We may immediately:</p>
              <ul>
                <li>Suspend or restrict access</li>
                <li>Remove data</li>
                <li>Terminate accounts</li>
              </ul>
              <p><strong>Without notice and without liability</strong></p>

              <h2>5. Internal Staff Obligations</h2>
              <p>Our employees and contractors must:</p>
              <ul>
                <li>Access data only as required for their role</li>
                <li>Follow internal security and confidentiality policies</li>
              </ul>
              <p>Any breach may result in disciplinary action or termination.</p>

              <h2>6. Reporting Violations</h2>
              <p>Users should report suspected misuse to: <a href="mailto:support@zenif.io">support@zenif.io</a></p>

              <h2>7. No Liability</h2>
              <p>We are not responsible for:</p>
              <ul>
                <li>User misconduct</li>
                <li>Illegal data uploaded by customers</li>
                <li>Actions of third parties</li>
              </ul>

              <hr />

              <h1>Data Retention &amp; Deletion Policy</h1>

              <h2>1. General Approach</h2>
              <p>We retain data only as necessary to:</p>
              <ul>
                <li>Provide the Service</li>
                <li>Meet legal and operational requirements</li>
              </ul>

              <h2>2. Active Accounts</h2>
              <p>Data is retained for the duration of an active subscription.</p>

              <h2>3. Account Termination</h2>
              <p>Upon termination:</p>
              <ul>
                <li>Data may be deleted after a reasonable period</li>
                <li>We are not obligated to retain or provide data</li>
              </ul>
              <p>Customers are responsible for exporting data before termination.</p>

              <h2>4. Backups</h2>
              <ul>
                <li>Data may remain in backups for a limited time</li>
                <li>Backups are not guaranteed to be recoverable</li>
              </ul>

              <h2>5. No Restoration Obligation</h2>
              <p>We do not guarantee:</p>
              <ul>
                <li>Data recovery</li>
                <li>Restoration of deleted data</li>
              </ul>

              <h2>6. Retention Upgrades</h2>
              <p>We may offer paid options for:</p>
              <ul>
                <li>Extended data retention</li>
                <li>Backup services</li>
                <li>Data export assistance</li>
              </ul>
              <h2>7. Legal Retention</h2>
              <p>We may retain data:</p>
              <ul>
                <li>To comply with legal obligations</li>
                <li>To resolve disputes</li>
                <li>To enforce agreements</li>
              </ul>

              <h2>8. Customer Responsibility</h2>
              <p>Customers are responsible for:</p>
              <ul>
                <li>Their own retention policies</li>
                <li>Compliance with legal requirements</li>
                <li>Managing deletion requests</li>
              </ul>

              <h2>9. No Liability</h2>
              <p>We are not liable for:</p>
              <ul>
                <li>Data loss after deletion</li>
                <li>Failure to retain data beyond standard periods</li>
              </ul>

              <hr />

              <h1>Security Policy (Summary)</h1>

              <h2>1. Overview</h2>
              <p>We implement commercially reasonable technical and organisational measures to protect data within the platform.</p>
              <p>However, no system is completely secure, and use of the Service is at the user’s own risk.</p>

              <h2>2. Access Controls</h2>
              <ul>
                <li>Role-based access controls</li>
                <li>Authentication mechanisms</li>
                <li>Least-privilege principles for staff access</li>
              </ul>

              <h2>3. Data Protection Measures</h2>
              <ul>
                <li>Encryption in transit (where applicable)</li>
                <li>Secure storage practices</li>
                <li>Segregation of customer data (where feasible)</li>
              </ul>

              <h2>4. Monitoring &amp; Detection</h2>
              <ul>
                <li>System monitoring and logging</li>
                <li>Detection of suspicious activity</li>
              </ul>

              <h2>5. Internal Security</h2>
              <ul>
                <li>Staff confidentiality obligations</li>
                <li>Restricted internal access to data</li>
                <li>Security awareness practices</li>
              </ul>

              <h2>6. Incident Response</h2>
              <p>We maintain processes to:</p>
              <ul>
                <li>Detect and respond to incidents</li>
                <li>Mitigate impact</li>
              </ul>

              <h2>7. Shared Responsibility Model</h2>
              <p><strong>We are responsible for:</strong></p>
              <ul>
                <li>Platform-level security</li>
              </ul>
              <p><strong>Customers are responsible for:</strong></p>
              <ul>
                <li>User access management</li>
                <li>Data accuracy and legality</li>
                <li>Device and credential security</li>
                <li>Internal policies and compliance</li>
              </ul>

              <h2>8. No Guarantee</h2>
              <p>We do not guarantee:</p>
              <ul>
                <li>Prevention of all breaches</li>
                <li>Uninterrupted security</li>
              </ul>
              <p>We disclaim liability for attacks or breaches beyond our reasonable control.</p>
            </body>
          </div>
        </div>
        <router-link to="/login" class="flex justify-center items-center hover:underline gap-2">
          <font-awesome-icon icon="fa-regular fa-arrow-left-long" />
          Go To <b class="text-green-brand"> Log In</b>
        </router-link>
      </div>
    </div>
    <div class="gradient"></div>
  </div>
</template>

<style scoped>
.white-06 {
  position: relative;
}
.white-06 * {
  z-index: 2;

  position: relative;
  overflow: hidden;
}
.white-06:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  opacity: 0.06;
  z-index: 1;
}

.gradient-content {
  position: relative;
  z-index: 2;
}
.gradient {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;

  background-color: #000;
  /*  background-image:
   radial-gradient(at 96% 8%, hsl(102, 39.68%, 49.41%) 0px, transparent 50%),
    radial-gradient(at 32% 8%, hsl(120, 2%, 9%) 0px, transparent 50%),
    radial-gradient(at 64% 88%, hsl(102, 39.68%, 49.41%) 0px, transparent 50%);
 */

  background-image: radial-gradient(at 96% 8%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%), radial-gradient(at 32% 8%, hsl(0, 0%, 0%) 0px, transparent 50%), radial-gradient(at 64% 88%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%), radial-gradient(at 39% 83%, hsl(0, 0%, 0%) 0px, transparent 50%), radial-gradient(at 30% 21%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%), radial-gradient(at 66% 54%, hsl(0, 0%, 0%) 0px, transparent 50%), radial-gradient(at 74% 47%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%);

  background-size: 200% 200%;
  animation: move-bg 10s linear infinite;
}

@keyframes move-bg {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
