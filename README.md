CareWeave IQ - Healthcare Management System

A comprehensive healthcare management platform that connects patients and doctors through an intelligent authentication system with AI-powered medical assistance.

🏥 What is CareWeave IQ?

CareWeave IQ is a modern healthcare management system designed to streamline medical workflows and improve patient-doctor interactions. The platform provides:

- **Secure Authentication System** - Role-based access for patients and doctors
- **AI-Powered Medical Assistant** - Intelligent chatbot for symptom checking and appointment booking
- **Comprehensive Medical Records Management** - Digital storage and organization of patient data
- **Appointment Scheduling** - Real-time booking system with availability tracking
- **Prescription Management** - Digital prescription creation and tracking
- **File Upload System** - Support for medical documents, lab reports, and prescriptions

## ✨ Key Features

### For Patients:
- 📱 **Personal Dashboard** - Overview of appointments, medical records, and prescriptions
- 🤖 **AI Medical Assistant** - Chatbot for symptom analysis and appointment booking
- 📅 **Appointment Booking** - Easy scheduling with available doctors
- 📋 **Medical Records Access** - View complete medical history
- 💊 **Prescription Tracking** - Monitor active medications and instructions
- 🔒 **Secure Profile Management** - Personal information and emergency contacts

### For Doctors:
- 👨‍⚕️ **Doctor Dashboard** - Comprehensive practice management
- 📊 **Patient Management** - Access to patient records and history
- 📝 **Medical Record Creation** - Digital documentation of patient visits
- 💊 **Prescription Writing** - Digital prescription creation with file uploads
- 📅 **Appointment Management** - Schedule and track patient appointments
- 📁 **File Management** - Upload and organize medical documents

### Technical Features:
- 🔐 **Convex Authentication** - Secure user authentication and authorization
- 🗄️ **Real-time Database** - Convex backend for instant data synchronization
- 🎨 **Modern UI/UX** - Clean, responsive design with Tailwind CSS
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🔄 **Real-time Updates** - Live data synchronization across all users

## 🚀 Getting Started

### Prerequisites

Before running CareWeave IQ, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Convex account** (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd careweave_iq_authentication_system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Convex**
   ```bash
   npx convex dev
   ```
   Follow the prompts to create a new Convex project or connect to an existing one.

4. **Configure environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   CONVEX_DEPLOYMENT=your-convex-deployment-url
   CONVEX_SITE_URL=your-site-url
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

### Alternative Start Commands

- **Frontend only**: `npm run dev:frontend`
- **Backend only**: `npm run dev:backend`
- **Build for production**: `npm run build`

## 🏗️ Project Structure

```
careweave_iq_authentication_system/
├── src/
│   ├── components/           # React components
│   │   ├── Dashboard.tsx     # Main dashboard component
│   │   ├── PatientDashboard.tsx
│   │   ├── DoctorDashboard.tsx
│   │   ├── Chatbot.jsx       # AI medical assistant
│   │   └── ProfileSetup.tsx
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   └── main.tsx             # Application entry point
├── convex/                  # Backend functions and schema
│   ├── schema.ts            # Database schema definition
│   ├── auth.ts              # Authentication logic
│   ├── patients.ts          # Patient-related functions
│   ├── doctors.ts           # Doctor-related functions
│   ├── appointments.ts      # Appointment management
│   └── medicalRecords.ts    # Medical records handling
├── public/                  # Static assets
└── package.json            # Project dependencies
```

## 🔧 Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Backend**: Convex (real-time database and functions)
- **Authentication**: Convex Auth
- **UI Components**: Custom components with Tailwind CSS
- **File Storage**: Convex file storage
- **Build Tool**: Vite
- **Package Manager**: npm

## 📱 How to Use

### For New Users:

1. **Sign Up**: Create an account using the authentication system
2. **Profile Setup**: Complete your profile as either a patient or doctor
3. **Explore Dashboard**: Navigate through the different sections
4. **Use AI Assistant**: Click the chat icon to interact with the medical assistant

### For Patients:

1. **Book Appointments**: Use the "Book Appointment" button or ask the AI assistant
2. **View Medical Records**: Check your medical history in the Records tab
3. **Track Prescriptions**: Monitor active medications in the Prescriptions tab
4. **Chat with AI**: Get medical guidance and appointment assistance

### For Doctors:

1. **Manage Appointments**: View and update appointment statuses
2. **Create Medical Records**: Document patient visits and treatments
3. **Write Prescriptions**: Create digital prescriptions for patients
4. **Upload Files**: Store medical documents and lab reports

## 🤖 AI Medical Assistant

The CareWeave IQ chatbot provides:

- **Symptom Analysis**: Basic health guidance and recommendations
- **Appointment Booking**: Direct integration with the scheduling system
- **Medical Information**: General health tips and advice
- **Quick Actions**: Fast access to common tasks

**Available Commands:**
- "book appointment" - Start appointment booking process
- "I have symptoms" - Get symptom analysis
- "help" - View available commands

## 🔒 Security & Privacy

- **Secure Authentication**: Convex Auth provides enterprise-grade security
- **Role-based Access**: Patients and doctors have different permission levels
- **Data Encryption**: All data is encrypted in transit and at rest
- **HIPAA Compliance**: Designed with healthcare privacy standards in mind

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run dev:frontend` - Start frontend only
- `npm run dev:backend` - Start backend only
- `npm run build` - Build for production
- `npm run lint` - Run linting checks

### Database Schema

The system uses Convex with the following main tables:
- `users` - User authentication data
- `patients` - Patient profiles and information
- `doctors` - Doctor profiles and specializations
- `appointments` - Appointment scheduling and management
- `medicalRecords` - Patient medical history
- `prescriptions` - Medication prescriptions

## 🌟 Why CareWeave IQ?

- **Modern Technology**: Built with cutting-edge web technologies
- **Real-time Updates**: Instant synchronization across all devices
- **User-friendly Interface**: Intuitive design for all user types
- **Scalable Architecture**: Built to handle growing healthcare needs
- **AI Integration**: Smart features to enhance user experience
- **Mobile-first Design**: Optimized for mobile healthcare workflows

## 📞 Support

For technical support or questions about CareWeave IQ:

- Check the documentation in the `/docs` folder
- Review the code comments for implementation details
- Contact the development team for assistance

## 🔮 Future Enhancements

- **Telemedicine Integration** - Video consultation capabilities
- **Advanced AI Features** - Enhanced medical diagnosis assistance
- **Mobile App** - Native iOS and Android applications
- **Analytics Dashboard** - Healthcare analytics and reporting
- **Integration APIs** - Connect with external healthcare systems

---

**CareWeave IQ** - Revolutionizing healthcare management through intelligent technology and user-centered design.

*Built with ❤️ for better healthcare experiences*
