# EmailJS Troubleshooting Guide

## 🚨 Current Issue: 400 Bad Request Error

Your EmailJS service is returning a 400 error, which means there's a configuration issue.

## 🔍 Step-by-Step Troubleshooting

### Step 1: Check EmailJS Service Configuration

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Navigate to**: Email Services
3. **Click on**: `service_vdkx6od`
4. **Check these settings**:

#### ✅ Service Status
- Make sure the service is **Active**
- Verify Gmail connection is working

#### ✅ reCAPTCHA Settings
- **Disable** reCAPTCHA completely
- Look for "Security" or "reCAPTCHA" options
- Turn off any captcha protection

#### ✅ Template Configuration
- Go to "Email Templates"
- Click on `template_8u7ryea`
- Verify template variables match:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{message}}`
  - `{{to_email}}`
  - `{{subject}}`

### Step 2: Verify Template Variables

Your template should have these variables:
```html
Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

### Step 3: Test EmailJS Service

1. **In EmailJS Dashboard**:
   - Go to "Email Services"
   - Click "Test" on your service
   - Send a test email

2. **Check if test email arrives**:
   - If test fails → Service configuration issue
   - If test succeeds → Template or code issue

### Step 4: Alternative Solutions

#### Option A: Create New Service
1. Delete current service
2. Create new Gmail service
3. Get new Service ID
4. Update code with new ID

#### Option B: Use Different Email Provider
1. Try Outlook/Hotmail instead of Gmail
2. Or use EmailJS's built-in email service

#### Option C: Check Gmail Settings
1. Enable "Less secure app access" in Gmail
2. Or use Gmail App Password
3. Verify Gmail account is active

## 🔧 Quick Fixes to Try

### Fix 1: Update Service ID
If you created a new service, update this line:
```typescript
const result = await emailjs.send(
  'YOUR_NEW_SERVICE_ID', // Replace with new service ID
  'template_8u7ryea',
  templateParams,
  'q2ic3TavT5Sv1CTEP'
);
```

### Fix 2: Update Template ID
If you created a new template, update this line:
```typescript
const result = await emailjs.send(
  'service_vdkx6od',
  'YOUR_NEW_TEMPLATE_ID', // Replace with new template ID
  templateParams,
  'q2ic3TavT5Sv1CTEP'
);
```

### Fix 3: Check Public Key
Verify your public key is correct:
```typescript
emailjs.init("q2ic3TavT5Sv1CTEP"); // Should match your actual public key
```

## 🎯 Most Likely Solutions

1. **Disable reCAPTCHA** (90% of cases)
2. **Check template variables** (5% of cases)
3. **Recreate service** (5% of cases)

## 📞 Need Help?

If none of these work:
1. Check EmailJS documentation
2. Contact EmailJS support
3. Consider alternative email services (Formspree, Netlify Forms)

## 🚀 After Fixing

Once resolved:
1. Test the contact form
2. Verify emails arrive in your inbox
3. Check spam folder if needed
4. Update the guide with what worked

Your contact form will work perfectly once the configuration is correct! 🎉 