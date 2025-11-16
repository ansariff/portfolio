# EmailJS Setup Instructions

Follow these steps to enable the contact form to send emails to itsmaansari@gmail.com:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or any email provider you prefer)
4. Connect your Gmail account (itsmaansari@gmail.com)
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up the template with these variables:
   - **Template Name**: Contact Form
   - **Subject**: New message from {{user_name}}
   - **Content**:
     ```
     You have received a new message from your portfolio:
     
     Name: {{user_name}}
     Email: {{user_email}}
     
     Message:
     {{message}}
     ```
4. Set **To Email** to: itsmaansari@gmail.com
5. Copy the **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `YOUR_PUBLIC_KEY`)

## Step 5: Update Contact.jsx

Open `src/components/Contact.jsx` and replace these placeholders:

```javascript
const serviceId = 'service_xxxxxxx';  // Replace with your Service ID from Step 2
const templateId = 'template_xxxxxxx'; // Replace with your Template ID from Step 3
const publicKey = 'YOUR_PUBLIC_KEY';   // Replace with your Public Key from Step 4
```

## Step 6: Test

1. Run your app: `npm start`
2. Navigate to the Contact page
3. Fill out the form and click Send Message
4. Check itsmaansari@gmail.com for the test email

## Free Tier Limits

- 200 emails per month
- Perfect for a portfolio website

## Alternative (No Setup Required)

If you want a working solution immediately without EmailJS setup, I can switch back to FormSubmit which requires no configuration but redirects users after submission.
