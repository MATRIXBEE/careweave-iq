/**
 * Script to populate the CareWeave IQ database with sample data
 * Run this with: node populate-database.js
 */

// Get Convex URL from environment or use the deployment URL
const CONVEX_URL = process.env.VITE_CONVEX_URL || process.env.CONVEX_URL || "https://judicious-bee-606.convex.cloud";

async function insertSampleData() {
  console.log("🚀 Starting to populate database with sample data...\n");
  
  try {
    // Insert complete sample data
    console.log("📊 Inserting doctors, patients, appointments, medical records, and prescriptions...");
    const response1 = await fetch(`${CONVEX_URL}/api/insert-sample-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    
    if (!response1.ok) {
      const error = await response1.text();
      throw new Error(`Failed to insert sample data: ${error}`);
    }
    
    const result1 = await response1.json();
    console.log("✅ Complete sample data inserted!");
    console.log(`   - Doctors: ${result1.summary.doctorsCreated}`);
    console.log(`   - Patients: ${result1.summary.patientsCreated}`);
    console.log(`   - Medical Records: ${result1.summary.medicalRecordsCreated}`);
    console.log(`   - Prescriptions: ${result1.summary.prescriptionsCreated}`);
    console.log(`   - Appointments: ${result1.summary.appointmentsCreated}\n`);
    
    // Add more medical records
    console.log("📋 Adding more medical records and prescriptions...");
    const response2 = await fetch(`${CONVEX_URL}/api/add-more-records`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    
    if (!response2.ok) {
      const error = await response2.text();
      throw new Error(`Failed to add more records: ${error}`);
    }
    
    const result2 = await response2.json();
    console.log("✅ Additional records added!");
    console.log(`   - Medical Records: ${result2.summary.medicalRecordsAdded}`);
    console.log(`   - Prescriptions: ${result2.summary.prescriptionsAdded}\n`);
    
    console.log("🎉 Database populated successfully!");
    console.log("\nYour CareWeave IQ system now has:");
    console.log(`   ✓ ${result1.summary.doctorsCreated} doctors`);
    console.log(`   ✓ ${result1.summary.patientsCreated} patients`);
    console.log(`   ✓ ${result1.summary.medicalRecordsCreated + result2.summary.medicalRecordsAdded} medical records`);
    console.log(`   ✓ ${result1.summary.prescriptionsCreated + result2.summary.prescriptionsAdded} prescriptions`);
    console.log(`   ✓ ${result1.summary.appointmentsCreated} appointments`);
    
  } catch (error) {
    console.error("❌ Error populating database:", error.message);
    process.exit(1);
  }
}

insertSampleData();

