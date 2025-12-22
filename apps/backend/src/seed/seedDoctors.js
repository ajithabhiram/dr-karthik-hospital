require('dotenv').config();
const supabase = require('../db/supabase');

const sampleDoctors = [
  {
    name: "Dr. Karthik Paidi",
    qualifications: "MBBS, MS (Orthopaedics), FIAS, FIJR, EASE",
    specialty: "Consultant Orthopaedic, Arthroscopic and Replacement Surgeon",
    experience: "12 years overall experience including 9 years as a specialist",
    description: "Dr. Karthik Paidi is a highly skilled Orthopaedic Surgeon specializing in Joint Replacement and Arthroscopic Surgeries. He was awarded Gold Medal (2016) for the Best Paper Presentation. He has vast experience of Arthroscopic Surgeries including knee Arthroscopy (meniscal & ligament surgeries), Shoulder (Rotator cuff & labral repair). He was awarded his fellowship in Gujarat (AMD) in sports medicine under Dr. Prathmesh Jain who is one of the best Arthroscopy Surgeons in India. He was awarded his Fellowship in Joint replacement (Sunshine) in Hyderabad. Completed Express Arthroplasty Skills Education (EASE) in MS Ramaiah (Bengaluru) Advance Learning Center.",
    services: "Sports Medicine Fellowship (AMD), Fellowship in Joint Replacement (Sunshine), Expertise in Arthroscopy Surgery - minimally invasive keyhole surgery which gives rehabilitation & return back to normal activity, Knee Arthroscopy (meniscal & ligament surgeries), Shoulder Surgery (Rotator cuff & labral repair), Joint Replacement Surgery",
    languages: "English, Telugu",
    awards: "Received Gold Medal for the Best Paper Presentation (2016), Fellowship in Sports Medicine (AMD Gujarat), Fellowship in Joint Replacement (Sunshine Hyderabad), EASE Certification (MS Ramaiah Bengaluru)",
    phone: "+917386361609",
    email: "karthik@ruthvikhospitals.com",
    photo_url: "/u1.jpeg",
    availability: {
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      slots: ["10:00", "15:00", "18:00"]
    }
  },
  {
    name: "Dr. Shalini Duvvada",
    qualifications: "MBBS, M.S, MRCS (U.K), FMAS, FIAGES, eFIAGES",
    specialty: "Chief Consultant General, Laparoscopic and Laser Surgeon, Oncoplastic Breast Surgeon",
    experience: "More than 12 years of experience",
    description: "Dr. Shalini Duvvada is a General Surgeon in MVP Colony, Visakhapatnam and has an experience of 12 years in this field. Dr. Shalini Duvvada practices at Tirumala Vijaya Hospital in MVP Colony, Visakhapatnam. She completed MS - General Surgery from KIMS College in 2017 and MBBS from Dr. NTR University of Health Sciences Andhra Pradesh in 2013. Successfully performed more than 3000 surgeries with remarkable outcomes.",
    services: "Onco Plastic Breast Surgery, General Surgery, Chemotherapy, Laparoscopic Surgery, 3D Mammogram and Ultrasound Scan Treatment for Breast Pain and Lump",
    languages: "English, Telugu",
    phone: "+917386361609",
    email: "shalini@ruthvikhospitals.com",
    photo_url: "/Dr.Shalini-Duvvada.png",
    availability: {
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      slots: ["09:00", "14:00", "17:00"]
    }
  }
];

async function seedDoctors() {
  try {
    console.log('🔄 Seeding doctors...');

    // Clear existing doctors
    const { error: deleteError } = await supabase
      .from('doctors')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all

    if (deleteError) {
      console.log('⚠️  Could not clear existing doctors:', deleteError.message);
    } else {
      console.log('🗑️  Cleared existing doctors');
    }

    // Insert sample doctors IN ORDER (Dr. Shalini first, then Dr. Karthik)
    const { data, error } = await supabase
      .from('doctors')
      .insert(sampleDoctors)
      .select();

    if (error) {
      console.error('❌ Seed error:', error);
      console.log('\n💡 Make sure you have created the tables in Supabase. Run: npm run migrate');
      process.exit(1);
    }

    console.log(`✅ Seeded ${data.length} doctors (Dr. Karthik first, then Dr. Shalini):`);
    data.forEach((doc, index) => {
      console.log(`   ${index + 1}. ${doc.name} (${doc.specialty})`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
}

seedDoctors();
