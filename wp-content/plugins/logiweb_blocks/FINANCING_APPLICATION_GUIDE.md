# Financing Application Flow Implementation

## Overview

Complete two-page financing application system with form submission, data persistence, and results display using WordPress Custom Post Type and REST API.

---

## Architecture

### Flow

```
┌─────────────────────────────────────┐
│  Apply Now Page (Block 44)          │
│  - Collects financing app data      │
│  - Stores in Custom Post Type       │
│         ↓                           │
│  Redirects with ?app=ID             │
└─────────────────────────────────────┘
         ↓
┌─────────────────────────────────────┐
│  Select Financing Page (Block 45)   │
│  - Displays 6 financing partners    │
│  - Shows app data summary           │
│  - "Edit Info" returns to form      │
└─────────────────────────────────────┘
```

---

## Files Created/Modified

### Block Files (src/blocks/)

- **block-44/**: Financing Application Form
  - `block.json` - Block metadata
  - `index.js` - React editor component

- **block-45/**: Financing Results Display
  - `block.json` - Block metadata
  - `index.js` - React editor component

### Frontend Script

- **static/financing-form.js** - AJAX form submission handler

### Main Plugin File

- **logiweb-blocks.php** - Updated with:
  - Custom Post Type registration (`financing_app`)
  - Block registrations (block-44, block-45)
  - PHP render callbacks (`logiweb_render_application_form`, `logiweb_render_financing_results`)
  - Frontend script enqueue

### Styles

- **src/global-styles.scss** - Added styling for both blocks (~500 lines)

### Updated Files

- **src/index.js** - Added imports for block-44 and block-45

---

## Key Components

### 1. Custom Post Type (financing_app)

- Stores application submissions
- Uses meta field `_app_data` for form responses
- REST API enabled for AJAX submissions

### 2. Block 44 – Application Form

**Features:**

- Editableform title & description
- Fields:
  - Personal: First Name, Last Name, Email, Phone
  - Address: Street, City, State, ZIP
  - Project: Type, Details, Amount, Start Date
- Prefill support when editing (?edit=ID)
- AJAX submission via REST API
- Redirect to results page with ?app=ID

**Form Sections:**

```
┌─ Personal Information
│  └─ First Name | Last Name
│  └─ Email | Phone
│  └─ Street Address
│
└─ Project Details
   └─ City | State | ZIP
   └─ Project Type (select)
   └─ Project Details (textarea)
   └─ Amount | Start Date
```

### 3. Block 45 – Financing Results

**Features:**

- Fetches application by ?app=ID
- Displays application summary (name, project type, amount)
- 6 financing partner cards:
  - Greensky (GS) - Green
  - Synchrony (SY) - Blue
  - Wells Fargo (WF) - Red
  - EnerBank (EB) - Orange
  - Service Finance (SF) - Purple
  - DNH In-House (DNH) - Dark Navy

- Each card shows:
  - Partner name & rating
  - Min. credit score
  - APR range & terms
  - 3 key benefits
  - "Apply Now" button

- Bottom CTA section:
  - "Not sure?" message
  - Call phone button
  - "Speak with Specialist" button

- "Edit Info" button returns to form with prefilled data

---

## Data Flow

### Form → Database

1. User fills form on Block 44
2. JavaScript intercepts submit
3. AJAX POST to `/wp-json/wp/v2/financing_app`
4. WordPress creates new `financing_app` CPT post
5. Form data stored in `_app_data` meta field
6. Returns post ID
7. Redirects to `/select-financing/?app={ID}`

### Database → Results Display

1. Block 45 reads ?app= query parameter
2. Fetches `financing_app` post by ID
3. Retrieves `_app_data` meta
4. Displays application summary
5. Shows filtered financing options (can be dynamic based on credit, amount, etc.)

### Edit Flow

1. User clicks "Edit Info" on Block 45
2. Redirects to form with `?edit={ID}`
3. Form reads ?edit= parameter
4. Prefills all fields from `_app_data`
5. User updates and resubmits
6. New/updated CPT entry created
7. Redirects back to results

---

## Styling

### Color Scheme

- **Primary Form**: Blue gradient (#2f4ee0 - #2b46d2)
- **Backgrounds**: Light blue-gray (#f8f9fc, #f0f3fa)
- **Borders**: Soft blue (#dce3ee, #e8edf5)
- **Text**: Dark blue (#1f2c45), Gray (#6b7280)
- **Partner Logos**:
  - GS: Green (#22c55e)
  - SY: Blue (#2563eb)
  - WF: Red (#dc2626)
  - EB: Orange (#f59e0b)
  - SF: Purple (#a855f7)
  - DNH: Dark (#1e293b)

### Responsive Design

- Desktop: Full 2/3-column layouts
- Tablet (900px): 2-column financing grid
- Mobile (700px): Single-column everything

---

## REST API Integration

### Endpoint

```
POST /wp-json/wp/v2/financing_app
```

### Payload

```json
{
  "title": "John Smith - 5/19/2026",
  "meta": {
    "_app_data": {
      "firstName": "John",
      "lastName": "Smith",
      "email": "john@example.com",
      "phone": "(555) 123-4567",
      "street": "123 Main St",
      "city": "Austin",
      "state": "TX",
      "zip": "78701",
      "projectType": "home-renovation",
      "projectDetails": "Kitchen remodel...",
      "projectAmount": "50000",
      "startDate": "2026-06-01"
    }
  }
}
```

### Security

- WordPress nonce verification
- REST API authentication
- User capability checks (will need to allow public access or adjust permissions)

---

## Frontend JavaScript (financing-form.js)

**Functionality:**

- Listens for form submit on `.financing-app-form`
- Reads `data-redirect` attribute for target URL
- Collects all form fields into object
- Posts to WordPress REST API with nonce
- Handles errors with alert
- Redirects on success: `{url}?app={post_id}`

---

## Configuration

### Create Pages

1. **Apply Now Page**
   - Add "Financing Application Form" block (block-44)
   - Set results page URL: `/select-financing/`

2. **Select Financing Page**
   - Add "Financing Results Selector" block (block-45)
   - Set default CTAs and contact info

### Customize Results

Edit `logiweb_render_financing_results()` function in `logiweb-blocks.php` to:

- Query actual financing partners from database
- Filter by credit score, amount, project type
- Pull rates from third-party API
- Use real CTA links/phone numbers

---

## Next Steps (Optional Enhancements)

1. **Email Notifications**
   - Send confirmation email to applicant
   - Notify admin of new application

2. **Partner Integration**
   - POST application data to partner APIs
   - Retrieve real rates/terms

3. **Validation**
   - Server-side validation in render callback
   - Sanitize all inputs

4. **Database Queries**
   - Create WP_Query to pull financing options from CPT
   - Store partner/rate data in separate CPT

5. **Admin Dashboard**
   - View all applications in WordPress admin
   - Export to CSV
   - Filter by date, amount, project type

6. **User Accounts**
   - Allow users to save applications
   - Retrieve past applications
   - Track application status

---

## Testing Checklist

- [ ] Fill form on Block 44, submit
- [ ] Verify data saved in database (`wp_posts` + `wp_postmeta`)
- [ ] Check redirect to Block 45 with ?app=ID
- [ ] Verify application summary displays correctly
- [ ] Click "Edit Info", form should prefill
- [ ] Modify and resubmit
- [ ] Verify financing cards display
- [ ] Test responsive design on mobile
- [ ] Verify nonce protection
- [ ] Check browser console for errors

---

## File Locations

```
/wp-content/plugins/logiweb_blocks/
├── logiweb-blocks.php (main plugin - updated)
├── src/
│  ├── index.js (updated - added block-44, block-45)
│  ├── global-styles.scss (updated - added styles)
│  └── blocks/
│     ├── block-44/
│     │  ├── block.json
│     │  └── index.js
│     └── block-45/
│        ├── block.json
│        └── index.js
└── static/
   └── financing-form.js (new)
```
