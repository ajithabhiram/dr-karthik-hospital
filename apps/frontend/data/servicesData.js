// Comprehensive Medical Services Data for Ruthvik Hospitals
// Each service contains: Overview, Conditions, Symptoms, Diagnosis, Treatment Options, 
// Surgical Procedure, Benefits, Risks, Recovery, and FAQs

export const servicesData = {
  // ==================== GENERAL SURGERY SERVICES ====================
  
  'piles-hemorrhoids': {
    name: 'Piles / Hemorrhoids Treatment',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/piles-hemorrhoids.jpg',
    tagline: 'Advanced Minimally Invasive Treatment for Hemorrhoids',
    overview: 'Hemorrhoids (piles) are swollen and inflamed veins in the rectum and anus that cause discomfort, pain, and bleeding. At Ruthvik Hospitals, we offer advanced treatment options including laser surgery, stapler hemorrhoidectomy, and minimally invasive procedures that provide effective relief with minimal pain and faster recovery. Our experienced surgeons use the latest techniques to ensure optimal outcomes and same-day discharge in most cases.',
    
    conditions: [
      'Internal Hemorrhoids (Grade I-IV)',
      'External Hemorrhoids',
      'Thrombosed Hemorrhoids',
      'Prolapsed Hemorrhoids',
      'Bleeding Hemorrhoids',
      'Mixed Hemorrhoids (Internal + External)',
      'Chronic Hemorrhoids',
      'Recurrent Hemorrhoids'
    ],
    
    symptoms: [
      'Painless bleeding during bowel movements',
      'Itching or irritation in the anal region',
      'Pain or discomfort in the anal area',
      'Swelling around the anus',
      'A lump near the anus (may be sensitive or painful)',
      'Leakage of feces',
      'Difficulty sitting',
      'Mucus discharge after bowel movement'
    ],
    
    diagnosis: {
      description: 'Our specialists conduct a thorough examination to diagnose hemorrhoids and determine the most appropriate treatment approach.',
      methods: [
        {
          name: 'Physical Examination',
          description: 'Visual inspection of the anal area and digital rectal examination to assess internal hemorrhoids.'
        },
        {
          name: 'Anoscopy',
          description: 'Using a small tube (anoscope) to examine the inside of the anal canal and lower rectum.'
        },
        {
          name: 'Proctoscopy',
          description: 'Detailed examination of the rectum using a proctoscope to visualize internal hemorrhoids.'
        },
        {
          name: 'Colonoscopy',
          description: 'Recommended for patients over 50 or with family history of colorectal cancer to rule out other conditions.'
        }
      ]
    },

    treatmentOptions: [
      {
        name: 'Laser Hemorrhoidectomy',
        description: 'Advanced laser technology to precisely remove hemorrhoidal tissue with minimal bleeding, less pain, and faster healing. Ideal for all grades of hemorrhoids.'
      },
      {
        name: 'Stapler Hemorrhoidopexy',
        description: 'Modern stapling technique that repositions prolapsed hemorrhoids and reduces blood supply. Significantly less painful than traditional surgery with quicker recovery.'
      },
      {
        name: 'Rubber Band Ligation',
        description: 'Non-surgical procedure for internal hemorrhoids where rubber bands are placed around the base to cut off blood supply, causing them to shrink and fall off.'
      },
      {
        name: 'Sclerotherapy',
        description: 'Injection of chemical solution into hemorrhoidal tissue to shrink small internal hemorrhoids. Effective for early-stage hemorrhoids.'
      }
    ],
    
    procedure: {
      description: 'Our advanced hemorrhoid surgery is performed using minimally invasive techniques that ensure maximum comfort and minimal recovery time.',
      duration: '30-45 minutes',
      anesthesia: 'Local anesthesia with sedation or Spinal anesthesia',
      steps: [
        {
          title: 'Preparation',
          description: 'Patient is positioned comfortably, and the surgical area is cleaned and sterilized. Anesthesia is administered for pain-free procedure.'
        },
        {
          title: 'Hemorrhoid Identification',
          description: 'The surgeon carefully examines and identifies all hemorrhoidal tissues that require treatment.'
        },
        {
          title: 'Laser/Stapler Application',
          description: 'Using advanced laser or stapler technology, the hemorrhoidal tissue is precisely treated. Laser seals blood vessels instantly, while stapler repositions tissue.'
        },
        {
          title: 'Hemostasis',
          description: 'Ensuring complete control of bleeding and checking for any additional hemorrhoids that may need treatment.'
        },
        {
          title: 'Closure',
          description: 'The surgical site is dressed appropriately. No external stitches are typically required with laser surgery.'
        }
      ]
    },
    
    benefits: [
      'Painless or minimal pain procedure',
      'Same-day discharge in most cases',
      'Faster recovery (3-5 days)',
      'Minimal bleeding during and after surgery',
      'No or minimal scarring',
      'Quick return to normal activities',
      'High success rate (95%+)',
      'Low recurrence rate',
      'No external wounds with laser surgery',
      'Preserves normal anal anatomy'
    ],
    
    risks: [
      'Temporary pain or discomfort (managed with medication)',
      'Minor bleeding (usually resolves quickly)',
      'Urinary retention (temporary)',
      'Infection (rare with proper care)',
      'Anal stenosis (narrowing - very rare)',
      'Fecal incontinence (extremely rare)',
      'Recurrence (less than 5% with proper technique)',
      'Delayed healing in diabetic patients'
    ],
    
    recovery: {
      timeline: '3-7 days for normal activities, 2-3 weeks for complete healing',
      stages: [
        {
          period: 'Day 1-3 (Immediate Post-Op)',
          description: 'Mild discomfort and soreness are normal. Most patients can walk and perform light activities.',
          instructions: [
            'Take prescribed pain medications as directed',
            'Use sitz baths (warm water) 3-4 times daily',
            'Drink plenty of water (8-10 glasses)',
            'Eat high-fiber foods to prevent constipation',
            'Avoid straining during bowel movements',
            'Keep the anal area clean and dry'
          ]
        },
        {
          period: 'Week 1-2 (Early Recovery)',
          description: 'Gradual improvement in comfort. Most patients return to work and light activities.',
          instructions: [
            'Continue sitz baths twice daily',
            'Maintain high-fiber diet',
            'Take stool softeners if needed',
            'Avoid heavy lifting (>5 kg)',
            'Walk regularly to promote healing',
            'Attend follow-up appointment'
          ]
        },
        {
          period: 'Week 3-4 (Complete Healing)',
          description: 'Full recovery achieved. Normal activities can be resumed including exercise.',
          instructions: [
            'Gradually increase physical activity',
            'Continue healthy bowel habits',
            'Maintain adequate hydration',
            'Regular exercise to prevent recurrence',
            'Final follow-up consultation'
          ]
        }
      ]
    },
    
    faqs: [
      {
        question: 'Is hemorrhoid surgery painful?',
        answer: 'With modern laser and stapler techniques, the procedure is significantly less painful than traditional surgery. Most patients experience only mild discomfort that is easily managed with medication. Many patients are surprised at how comfortable they feel after the procedure.'
      },
      {
        question: 'How long does the surgery take?',
        answer: 'The procedure typically takes 30-45 minutes depending on the severity and number of hemorrhoids. You will spend a few hours in the hospital for observation before being discharged the same day.'
      },
      {
        question: 'When can I return to work?',
        answer: 'Most patients can return to desk jobs within 3-5 days. For physically demanding jobs, we recommend 1-2 weeks of rest. Your surgeon will provide personalized advice based on your occupation and recovery progress.'
      },
      {
        question: 'Will hemorrhoids come back after surgery?',
        answer: 'The recurrence rate with modern techniques is very low (less than 5%). Maintaining a healthy lifestyle with high-fiber diet, adequate hydration, regular exercise, and avoiding prolonged sitting significantly reduces the risk of recurrence.'
      },
      {
        question: 'What is the difference between laser and stapler surgery?',
        answer: 'Laser surgery uses focused light energy to precisely remove hemorrhoidal tissue with minimal bleeding and no external wounds. Stapler surgery repositions prolapsed tissue and reduces blood supply. Both are excellent options; your surgeon will recommend the best approach based on your specific condition.'
      },
      {
        question: 'Can I eat normally after surgery?',
        answer: 'Yes, you can eat normally. In fact, we encourage a high-fiber diet with plenty of fruits, vegetables, and whole grains to ensure soft, regular bowel movements. Avoid spicy foods and alcohol for the first week.'
      },
      {
        question: 'Is the surgery covered by insurance?',
        answer: 'Most health insurance plans cover hemorrhoid surgery as it is a medically necessary procedure. We recommend checking with your insurance provider for specific coverage details. Our staff can assist with insurance paperwork.'
      },
      {
        question: 'What should I do if I experience bleeding after surgery?',
        answer: 'Minor spotting is normal for the first few days. However, if you experience heavy bleeding, severe pain, fever, or inability to urinate, contact our emergency number immediately. We provide 24/7 post-operative support.'
      }
    ]
  },

  // ==================== LAPAROSCOPIC SURGERY ====================
  
  'laparoscopic-surgery': {
    name: 'Laparoscopic Surgery',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/laparoscopic-surgery.jpg',
    tagline: 'Advanced Minimally Invasive Keyhole Surgery',
    overview: 'Laparoscopic surgery, also known as keyhole surgery, is a modern surgical technique that uses small incisions and a camera to perform complex procedures. At Ruthvik Hospitals, we specialize in advanced laparoscopic procedures that offer faster recovery, less pain, minimal scarring, and quicker return to normal activities. Our experienced surgeons use state-of-the-art equipment to perform a wide range of abdominal surgeries with precision and safety.',
    
    conditions: [
      'Gallbladder stones (Cholecystectomy)',
      'Appendicitis (Appendectomy)',
      'Hernias (Inguinal, Umbilical, Hiatal)',
      'Gynecological conditions (Hysterectomy, Ovarian cysts)',
      'Intestinal obstructions',
      'Gastroesophageal reflux disease (GERD)',
      'Colon and rectal conditions',
      'Abdominal adhesions'
    ],
    
    symptoms: [
      'Abdominal pain or discomfort',
      'Nausea and vomiting',
      'Bloating and gas',
      'Difficulty eating or digesting food',
      'Unexplained weight loss',
      'Fever and chills',
      'Changes in bowel habits',
      'Abdominal swelling or lumps'
    ],
    
    diagnosis: {
      description: 'Comprehensive evaluation to determine if laparoscopic surgery is appropriate for your condition.',
      methods: [
        { name: 'Physical Examination', description: 'Thorough abdominal examination to identify areas of concern.' },
        { name: 'Ultrasound', description: 'Non-invasive imaging to visualize internal organs and identify abnormalities.' },
        { name: 'CT Scan', description: 'Detailed cross-sectional imaging for precise diagnosis of abdominal conditions.' },
        { name: 'Blood Tests', description: 'Laboratory tests to assess overall health and identify infections or inflammation.' }
      ]
    },
    
    treatmentOptions: [
      { name: 'Laparoscopic Surgery', description: 'Minimally invasive approach using small incisions and camera guidance for optimal results.' },
      { name: 'Single-Incision Laparoscopy', description: 'Advanced technique using only one small incision for even better cosmetic results.' },
      { name: 'Robot-Assisted Laparoscopy', description: 'Cutting-edge robotic technology for enhanced precision in complex cases.' },
      { name: 'Diagnostic Laparoscopy', description: 'Exploratory procedure to diagnose unclear abdominal conditions.' }
    ],
    
    procedure: {
      description: 'Laparoscopic surgery is performed through small incisions using specialized instruments and a camera.',
      duration: '1-3 hours depending on complexity',
      anesthesia: 'General anesthesia',
      steps: [
        { title: 'Anesthesia', description: 'General anesthesia is administered for complete comfort during the procedure.' },
        { title: 'Small Incisions', description: '3-4 small incisions (5-10mm) are made in the abdomen.' },
        { title: 'Camera Insertion', description: 'A laparoscope (camera) is inserted to visualize internal organs on a monitor.' },
        { title: 'Surgical Procedure', description: 'Specialized instruments are used to perform the required surgery with precision.' },
        { title: 'Closure', description: 'Small incisions are closed with dissolvable stitches or surgical glue.' }
      ]
    },
    
    benefits: [
      'Smaller incisions (5-10mm vs 10-20cm)',
      'Significantly less pain',
      'Faster recovery (3-5 days vs 2-3 weeks)',
      'Minimal scarring',
      'Lower risk of infection',
      'Less blood loss',
      'Shorter hospital stay (1-2 days)',
      'Quicker return to work and activities',
      'Better cosmetic results',
      'Reduced risk of hernias at incision sites'
    ],
    
    risks: [
      'Bleeding (rare)',
      'Infection at incision sites',
      'Injury to surrounding organs (very rare)',
      'Blood clots (prevented with early mobilization)',
      'Anesthesia-related complications',
      'Conversion to open surgery if needed (rare)',
      'Shoulder pain from gas (temporary)',
      'Adhesion formation (less than open surgery)'
    ],
    
    recovery: {
      timeline: '3-7 days for normal activities, 2-3 weeks for complete healing',
      stages: [
        {
          period: 'Day 1-2 (Hospital Stay)',
          description: 'Monitored in hospital, encouraged to walk within hours of surgery.',
          instructions: ['Take prescribed pain medication', 'Walk regularly to prevent blood clots', 'Drink clear liquids, progress to normal diet', 'Deep breathing exercises']
        },
        {
          period: 'Week 1 (Home Recovery)',
          description: 'Gradual improvement, most patients feel significantly better.',
          instructions: ['Rest but stay active with short walks', 'Avoid heavy lifting (>5kg)', 'Keep incisions clean and dry', 'Take pain medication as needed', 'Attend follow-up appointment']
        },
        {
          period: 'Week 2-3 (Return to Normal)',
          description: 'Most patients return to work and normal activities.',
          instructions: ['Gradually increase activity level', 'Resume light exercise', 'Continue healthy diet', 'Monitor incisions for healing']
        }
      ]
    },
    
    faqs: [
      { question: 'How long will I be in the hospital?', answer: 'Most laparoscopic procedures require only 1-2 days of hospitalization. Some simple procedures may even allow same-day discharge.' },
      { question: 'Will I have visible scars?', answer: 'Scars are minimal (5-10mm) and fade significantly over time. They are much smaller than traditional surgery scars.' },
      { question: 'When can I return to work?', answer: 'Most patients return to desk jobs within 5-7 days. Physical jobs may require 2-3 weeks recovery.' },
      { question: 'Is laparoscopic surgery safe?', answer: 'Yes, laparoscopic surgery is very safe with lower complication rates than traditional open surgery. Our surgeons are highly experienced in these techniques.' },
      { question: 'Will I feel pain after surgery?', answer: 'Pain is significantly less than open surgery and is well-controlled with medication. Most patients describe it as mild discomfort rather than severe pain.' }
    ]
  },

  // ==================== GALLBLADDER STONES ====================
  
  'gallbladder-stones': {
    name: 'Gallbladder Stones (Cholecystectomy)',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/gallbladder-stones.jpg',
    tagline: 'Laparoscopic Gallbladder Removal - Same Day Surgery',
    overview: 'Gallstones are hardened deposits that form in the gallbladder and can cause severe pain and complications. At Ruthvik Hospitals, we perform laparoscopic cholecystectomy (gallbladder removal) as a same-day procedure with minimal pain and rapid recovery. Our advanced surgical techniques ensure safe removal of the gallbladder through tiny incisions, allowing you to return to normal life quickly without the burden of gallstone attacks.',
    
    conditions: [
      'Symptomatic gallstones',
      'Acute cholecystitis (inflamed gallbladder)',
      'Chronic cholecystitis',
      'Biliary colic (gallstone pain)',
      'Gallbladder polyps',
      'Gallstone pancreatitis',
      'Biliary dyskinesia',
      'Porcelain gallbladder'
    ],
    
    symptoms: [
      'Severe pain in upper right abdomen',
      'Pain radiating to right shoulder or back',
      'Nausea and vomiting',
      'Indigestion after fatty meals',
      'Bloating and gas',
      'Fever and chills (if infected)',
      'Jaundice (yellowing of skin/eyes)',
      'Clay-colored stools'
    ],
    
    diagnosis: {
      description: 'Accurate diagnosis of gallstones using modern imaging techniques.',
      methods: [
        { name: 'Ultrasound', description: 'Primary diagnostic tool to visualize gallstones with 95% accuracy.' },
        { name: 'Blood Tests', description: 'Liver function tests and complete blood count to assess complications.' },
        { name: 'CT Scan', description: 'Detailed imaging for complex cases or suspected complications.' },
        { name: 'MRCP', description: 'Magnetic resonance imaging of bile ducts to check for stones in ducts.' }
      ]
    },
    
    treatmentOptions: [
      { name: 'Laparoscopic Cholecystectomy', description: 'Gold standard treatment - minimally invasive removal of gallbladder through small incisions.' },
      { name: 'Single-Incision Cholecystectomy', description: 'Advanced technique using one small incision at the belly button for better cosmetic results.' },
      { name: 'ERCP (if needed)', description: 'Endoscopic procedure to remove stones from bile ducts before or after surgery.' },
      { name: 'Medical Management', description: 'Temporary pain management and dietary modifications (not curative).' }
    ],
    
    procedure: {
      description: 'Laparoscopic gallbladder removal is performed through 3-4 small incisions with camera guidance.',
      duration: '45-60 minutes',
      anesthesia: 'General anesthesia',
      steps: [
        { title: 'Anesthesia Administration', description: 'General anesthesia ensures complete comfort during the procedure.' },
        { title: 'Small Incisions', description: 'Four small incisions (5-10mm) are made in the abdomen.' },
        { title: 'Camera Insertion', description: 'Laparoscope is inserted to visualize the gallbladder and surrounding structures.' },
        { title: 'Gallbladder Dissection', description: 'Gallbladder is carefully separated from liver and bile duct is identified.' },
        { title: 'Removal', description: 'Gallbladder with stones is removed through one of the small incisions.' },
        { title: 'Closure', description: 'Incisions are closed with dissolvable stitches.' }
      ]
    },
    
    benefits: [
      'Same-day discharge in most cases',
      'Minimal pain and discomfort',
      'Small scars (5-10mm)',
      'Fast recovery (3-5 days)',
      'Quick return to work (5-7 days)',
      'No more gallstone attacks',
      'Low complication rate',
      'Can eat normally after recovery',
      'Excellent long-term outcomes',
      'High patient satisfaction'
    ],
    
    risks: [
      'Bile duct injury (very rare, <0.5%)',
      'Bleeding (rare)',
      'Infection',
      'Bile leak (rare, usually resolves)',
      'Injury to surrounding organs (very rare)',
      'Post-cholecystectomy syndrome (rare)',
      'Conversion to open surgery (rare)',
      'Anesthesia complications'
    ],
    
    recovery: {
      timeline: '3-5 days for normal activities, 1-2 weeks for complete recovery',
      stages: [
        {
          period: 'Day 1 (Surgery Day)',
          description: 'Surgery in morning, discharge same evening in most cases.',
          instructions: ['Walk within 2-3 hours', 'Drink clear liquids', 'Take pain medication', 'Rest at home']
        },
        {
          period: 'Days 2-5',
          description: 'Rapid improvement, most discomfort resolves.',
          instructions: ['Gradually resume normal diet', 'Short walks multiple times daily', 'Avoid heavy lifting', 'Keep incisions dry', 'Take prescribed medications']
        },
        {
          period: 'Week 2 onwards',
          description: 'Return to normal activities and work.',
          instructions: ['Resume all normal activities', 'No dietary restrictions', 'Light exercise permitted', 'Follow-up appointment']
        }
      ]
    },
    
    faqs: [
      { question: 'Can I live without a gallbladder?', answer: 'Yes, absolutely! The gallbladder stores bile but is not essential. Your liver continues to produce bile which flows directly to the intestine. Most people have no dietary restrictions after recovery.' },
      { question: 'Will I need to follow a special diet?', answer: 'For the first 2-3 weeks, we recommend a low-fat diet. After that, most patients can eat normally without restrictions. Some people may need to avoid very fatty foods.' },
      { question: 'When can I go back to work?', answer: 'Most patients return to desk jobs within 5-7 days. Physical jobs may require 2 weeks. You will feel significantly better within 3-4 days.' },
      { question: 'What if stones are in the bile duct?', answer: 'If stones are detected in the bile duct, we perform ERCP (endoscopic procedure) to remove them either before or after gallbladder surgery.' },
      { question: 'Is the surgery painful?', answer: 'Pain is minimal with laparoscopic surgery. Most patients describe it as mild discomfort rather than severe pain. Pain medication keeps you comfortable.' }
    ]
  },

  // ==================== PAINLESS BURNS TREATMENT ====================
  
  'painless-burns-treatment': {
    name: 'Painless Burns Treatment',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/painless-burns-treatment.jpg',
    tagline: 'Advanced Burn Care with Minimal Pain and Optimal Healing',
    overview: 'Burns can be devastating injuries requiring specialized care. At Ruthvik Hospitals, we provide comprehensive burn treatment using advanced pain management techniques and modern wound care protocols. Our multidisciplinary approach ensures minimal pain, prevents infection, promotes faster healing, and reduces scarring. We treat all degrees of burns from minor to severe with compassionate, expert care.',
    
    conditions: [
      'First-degree burns (superficial)',
      'Second-degree burns (partial thickness)',
      'Third-degree burns (full thickness)',
      'Thermal burns (heat, fire, hot liquids)',
      'Chemical burns (acids, alkalis)',
      'Electrical burns',
      'Radiation burns',
      'Infected burn wounds'
    ],
    
    symptoms: [
      'Redness and pain (first-degree)',
      'Blistering and severe pain (second-degree)',
      'White or charred skin (third-degree)',
      'Swelling around burn area',
      'Peeling skin',
      'Fever (if infected)',
      'Shock in severe burns',
      'Difficulty breathing (if airway involved)'
    ],
    
    diagnosis: {
      description: 'Comprehensive assessment of burn severity, depth, and extent to determine appropriate treatment.',
      methods: [
        { name: 'Physical Examination', description: 'Assessment of burn depth, size (percentage of body surface area), and location.' },
        { name: 'Rule of Nines', description: 'Calculation method to estimate total body surface area affected by burns.' },
        { name: 'Blood Tests', description: 'Complete blood count, electrolytes, and kidney function tests for severe burns.' },
        { name: 'Wound Culture', description: 'If infection is suspected, culture tests identify specific bacteria for targeted treatment.' }
      ]
    },
    
    treatmentOptions: [
      { name: 'Advanced Wound Dressing', description: 'Modern hydrocolloid and silver-based dressings that promote healing and prevent infection.' },
      { name: 'Pain Management Protocol', description: 'Multimodal pain control including topical anesthetics, oral medications, and nerve blocks for painless treatment.' },
      { name: 'Debridement', description: 'Gentle removal of dead tissue to promote healing and prevent infection.' },
      { name: 'Skin Grafting', description: 'For deep burns, skin grafting may be required to cover large areas and promote healing.' }
    ],
    
    procedure: {
      description: 'Burn treatment is tailored to the severity and extent of the injury, focusing on pain control and optimal healing.',
      duration: '30 minutes to 2 hours depending on severity',
      anesthesia: 'Local anesthesia, sedation, or general anesthesia based on burn extent',
      steps: [
        { title: 'Pain Control', description: 'Immediate pain relief using topical and systemic analgesics.' },
        { title: 'Wound Cleaning', description: 'Gentle cleansing with sterile saline and antiseptic solutions.' },
        { title: 'Debridement', description: 'Removal of dead tissue and blisters if necessary.' },
        { title: 'Dressing Application', description: 'Application of specialized burn dressings that promote healing.' },
        { title: 'Monitoring', description: 'Regular assessment and dressing changes until complete healing.' }
      ]
    },
    
    benefits: [
      'Minimal pain during treatment',
      'Faster healing with modern dressings',
      'Reduced risk of infection',
      'Minimal scarring with proper care',
      'Outpatient treatment for minor burns',
      'Expert wound care',
      'Prevention of contractures',
      'Comprehensive follow-up care'
    ],
    
    risks: [
      'Infection (prevented with proper care)',
      'Scarring (minimized with advanced techniques)',
      'Contractures (prevented with physiotherapy)',
      'Pigmentation changes',
      'Keloid formation (rare)',
      'Delayed healing in diabetics',
      'Need for skin grafting in severe cases'
    ],
    
    recovery: {
      timeline: '1-3 weeks for minor burns, 4-8 weeks for severe burns',
      stages: [
        {
          period: 'Days 1-7 (Acute Phase)',
          description: 'Initial healing begins, pain gradually decreases.',
          instructions: ['Keep wound clean and dry', 'Take pain medications as prescribed', 'Attend regular dressing changes', 'Watch for signs of infection', 'Elevate affected area to reduce swelling']
        },
        {
          period: 'Weeks 2-4 (Healing Phase)',
          description: 'New skin forms, wound contracts and closes.',
          instructions: ['Continue wound care as directed', 'Gentle range of motion exercises', 'Protect new skin from sun exposure', 'Use prescribed moisturizers', 'Attend follow-up appointments']
        },
        {
          period: 'Months 1-6 (Maturation Phase)',
          description: 'Scar tissue matures and remodels.',
          instructions: ['Massage scars with moisturizer', 'Use silicone gel sheets if recommended', 'Sun protection essential', 'Physiotherapy if needed', 'Regular follow-up for scar management']
        }
      ]
    },
    
    faqs: [
      { question: 'How painful is burn treatment?', answer: 'We use advanced pain management techniques including topical anesthetics and systemic medications to ensure treatment is as painless as possible. Most patients report minimal discomfort during dressing changes.' },
      { question: 'Will I have scars?', answer: 'Scarring depends on burn depth and size. First-degree burns heal without scars. Second-degree burns may leave minimal scars. We use advanced techniques and scar management protocols to minimize scarring.' },
      { question: 'How often do I need dressing changes?', answer: 'Initially, dressings may need to be changed every 2-3 days. As healing progresses, the frequency decreases. We will provide a personalized schedule.' },
      { question: 'When can I return to work?', answer: 'For minor burns, you may return to work within a week. Severe burns may require several weeks. We provide medical certificates as needed.' },
      { question: 'Do I need skin grafting?', answer: 'Skin grafting is typically needed only for deep third-degree burns or large second-degree burns that do not heal with conservative treatment. Your surgeon will discuss this if necessary.' }
    ]
  },

  // ==================== SKIN GRAFTING ====================
  
  'skin-grafting': {
    name: 'Skin Grafting Surgeries',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/skin-grafting.jpg',
    tagline: 'Advanced Reconstructive Surgery for Wound Coverage',
    overview: 'Skin grafting is a surgical procedure where healthy skin is transplanted to cover wounds that cannot heal on their own. At Ruthvik Hospitals, we perform various types of skin grafts using advanced microsurgical techniques to ensure optimal cosmetic and functional outcomes. Our experienced surgeons specialize in both split-thickness and full-thickness grafts for burns, traumatic wounds, and reconstructive procedures.',
    
    conditions: [
      'Deep burns requiring coverage',
      'Large traumatic wounds',
      'Chronic non-healing ulcers',
      'Diabetic foot ulcers',
      'Post-tumor excision defects',
      'Pressure sores (bedsores)',
      'Venous stasis ulcers',
      'Contracture release requiring coverage'
    ],
    
    symptoms: [
      'Large open wounds not healing',
      'Exposed bone, tendon, or muscle',
      'Chronic wound with infection risk',
      'Significant tissue loss',
      'Contractures limiting movement',
      'Painful non-healing ulcers',
      'Wounds with poor blood supply'
    ],
    
    diagnosis: {
      description: 'Thorough assessment to determine if skin grafting is necessary and which type is most appropriate.',
      methods: [
        { name: 'Wound Assessment', description: 'Evaluation of wound size, depth, location, and healing potential.' },
        { name: 'Vascular Studies', description: 'Doppler ultrasound to assess blood supply to the area.' },
        { name: 'Wound Culture', description: 'Testing for infection that must be treated before grafting.' },
        { name: 'Nutritional Assessment', description: 'Ensuring adequate nutrition for healing.' }
      ]
    },
    
    treatmentOptions: [
      { name: 'Split-Thickness Skin Graft (STSG)', description: 'Thin layer of skin including epidermis and part of dermis. Heals faster, used for large areas.' },
      { name: 'Full-Thickness Skin Graft (FTSG)', description: 'Entire thickness of skin. Better cosmetic result, used for smaller areas like face and hands.' },
      { name: 'Mesh Graft', description: 'STSG with small slits allowing expansion to cover larger areas.' },
      { name: 'Composite Graft', description: 'Includes skin and underlying tissue for complex reconstructions.' }
    ],
    
    procedure: {
      description: 'Skin grafting involves harvesting healthy skin from a donor site and transplanting it to the wound.',
      duration: '1-3 hours depending on graft size and complexity',
      anesthesia: 'General anesthesia or regional anesthesia',
      steps: [
        { title: 'Wound Preparation', description: 'Cleaning and preparing the recipient site, removing any dead tissue.' },
        { title: 'Donor Site Selection', description: 'Choosing appropriate donor site (usually thigh, buttock, or back).' },
        { title: 'Graft Harvesting', description: 'Using a dermatome or surgical blade to harvest skin of appropriate thickness.' },
        { title: 'Graft Placement', description: 'Carefully placing and securing the graft to the wound with sutures or staples.' },
        { title: 'Dressing Application', description: 'Applying specialized dressings to both donor and recipient sites.' }
      ]
    },
    
    benefits: [
      'Covers large wounds effectively',
      'Promotes faster healing',
      'Reduces infection risk',
      'Restores function and appearance',
      'Prevents contractures',
      'Reduces pain from open wounds',
      'High success rate (85-95%)',
      'Improves quality of life'
    ],
    
    risks: [
      'Graft failure (5-15% depending on factors)',
      'Infection at donor or recipient site',
      'Bleeding or hematoma formation',
      'Scarring at both sites',
      'Color mismatch between graft and surrounding skin',
      'Contracture formation',
      'Donor site pain',
      'Need for repeat grafting in some cases'
    ],
    
    recovery: {
      timeline: '2-3 weeks for graft healing, 6-12 weeks for complete recovery',
      stages: [
        {
          period: 'Days 1-5 (Critical Period)',
          description: 'Graft must remain undisturbed for initial "take" to occur.',
          instructions: ['Complete bed rest or limited mobility', 'Keep graft site immobilized', 'No weight bearing on grafted area', 'Take antibiotics as prescribed', 'Pain management']
        },
        {
          period: 'Weeks 1-3 (Early Healing)',
          description: 'Graft begins to vascularize and integrate with recipient site.',
          instructions: ['Gradual increase in activity', 'Gentle range of motion exercises', 'Protect graft from trauma', 'Regular dressing changes', 'Monitor for infection']
        },
        {
          period: 'Weeks 4-12 (Maturation)',
          description: 'Graft fully integrates, scars mature.',
          instructions: ['Resume normal activities gradually', 'Scar massage and moisturizing', 'Sun protection essential', 'Physiotherapy if needed', 'Regular follow-up']
        }
      ]
    },
    
    faqs: [
      { question: 'How successful are skin grafts?', answer: 'Success rates are 85-95% when performed under optimal conditions. Factors affecting success include wound bed quality, blood supply, infection control, and patient health.' },
      { question: 'Will the donor site heal?', answer: 'Yes, split-thickness donor sites heal within 2-3 weeks as the remaining dermis regenerates new skin. Full-thickness donor sites are closed with sutures.' },
      { question: 'Will the graft look like normal skin?', answer: 'Initially, grafts may appear different in color and texture. Over 6-12 months, they mature and blend better with surrounding skin, though some difference may remain.' },
      { question: 'How long do I need to stay in hospital?', answer: 'Most patients stay 3-7 days for monitoring and initial dressing changes. Complex cases may require longer hospitalization.' },
      { question: 'Can I walk after leg grafting?', answer: 'Walking is restricted for the first 5-7 days to allow graft adherence. Gradual mobilization begins after the first week with compression support.' }
    ]
  },

  // ==================== FOOT CORNS AND ULCERS ====================
  
  'foot-corns-ulcers': {
    name: 'Foot Corns and Ulcers Treatment',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/foot-corns-ulcers.jpg',
    tagline: 'Comprehensive Foot Care for Corns and Chronic Ulcers',
    overview: 'Foot corns and ulcers can cause significant pain and disability if left untreated. At Ruthvik Hospitals, we provide comprehensive treatment for foot corns, calluses, and chronic ulcers using both conservative and surgical approaches. Our multidisciplinary team addresses the underlying causes while promoting healing and preventing recurrence, ensuring you can walk comfortably again.',
    
    conditions: [
      'Painful foot corns',
      'Hard and soft calluses',
      'Plantar ulcers',
      'Neuropathic ulcers',
      'Pressure ulcers on feet',
      'Infected foot ulcers',
      'Non-healing foot wounds',
      'Recurrent corns and calluses'
    ],
    
    symptoms: [
      'Thick, hardened skin on feet',
      'Pain when walking or standing',
      'Open sores on feet',
      'Redness and swelling',
      'Discharge from ulcers',
      'Foul odor (if infected)',
      'Difficulty wearing shoes',
      'Bleeding from corns or ulcers'
    ],
    
    diagnosis: {
      description: 'Comprehensive foot examination to identify causes and determine appropriate treatment.',
      methods: [
        { name: 'Physical Examination', description: 'Detailed assessment of foot structure, pressure points, and wound characteristics.' },
        { name: 'Neurological Testing', description: 'Monofilament test and vibration sense to assess nerve function.' },
        { name: 'Vascular Assessment', description: 'Checking pulses and blood flow to ensure adequate circulation.' },
        { name: 'X-rays', description: 'Imaging to rule out bone abnormalities or infections.' }
      ]
    },
    
    treatmentOptions: [
      { name: 'Corn Removal', description: 'Surgical excision of painful corns with correction of underlying pressure points.' },
      { name: 'Debridement', description: 'Removal of dead tissue and calluses to promote healing of ulcers.' },
      { name: 'Advanced Wound Care', description: 'Modern dressings and growth factors to accelerate ulcer healing.' },
      { name: 'Pressure Offloading', description: 'Custom orthotics and footwear modifications to prevent recurrence.' }
    ],
    
    procedure: {
      description: 'Treatment is tailored to the specific condition, ranging from minor procedures to comprehensive wound care.',
      duration: '30 minutes to 1 hour',
      anesthesia: 'Local anesthesia',
      steps: [
        { title: 'Anesthesia', description: 'Local anesthetic injection for painless procedure.' },
        { title: 'Corn/Callus Removal', description: 'Surgical excision of thickened skin and underlying tissue.' },
        { title: 'Ulcer Debridement', description: 'Removal of dead tissue and cleaning of wound bed.' },
        { title: 'Wound Dressing', description: 'Application of specialized dressings to promote healing.' },
        { title: 'Pressure Relief', description: 'Recommendations for footwear and orthotics.' }
      ]
    },
    
    benefits: [
      'Immediate pain relief',
      'Faster ulcer healing',
      'Prevention of infection',
      'Improved mobility',
      'Reduced risk of amputation',
      'Better quality of life',
      'Outpatient procedure',
      'Quick recovery'
    ],
    
    risks: [
      'Recurrence if pressure not addressed',
      'Infection (rare with proper care)',
      'Delayed healing in diabetics',
      'Minor bleeding',
      'Temporary discomfort',
      'Need for repeat procedures'
    ],
    
    recovery: {
      timeline: '1-2 weeks for corns, 4-8 weeks for ulcers',
      stages: [
        {
          period: 'Days 1-7',
          description: 'Initial healing, pain reduction.',
          instructions: ['Keep foot elevated', 'Avoid pressure on treated area', 'Change dressings as directed', 'Take antibiotics if prescribed', 'Use prescribed footwear']
        },
        {
          period: 'Weeks 2-4',
          description: 'Continued healing, gradual return to activities.',
          instructions: ['Gradual increase in walking', 'Continue wound care', 'Wear proper footwear', 'Attend follow-up appointments', 'Monitor for signs of recurrence']
        },
        {
          period: 'Long-term',
          description: 'Prevention of recurrence.',
          instructions: ['Use custom orthotics', 'Regular foot inspections', 'Proper footwear always', 'Moisturize feet daily', 'Regular podiatric care']
        }
      ]
    },
    
    faqs: [
      { question: 'Will corns come back after removal?', answer: 'Corns can recur if the underlying pressure or friction is not addressed. We provide custom orthotics and footwear recommendations to prevent recurrence.' },
      { question: 'How long does it take for foot ulcers to heal?', answer: 'Healing time varies from 4-12 weeks depending on ulcer size, depth, and underlying conditions like diabetes. Proper wound care and pressure offloading are essential.' },
      { question: 'Can I walk after the procedure?', answer: 'Limited walking is usually permitted with proper footwear. We may recommend a special boot or crutches to offload pressure from the treated area.' },
      { question: 'Are foot ulcers dangerous?', answer: 'Yes, untreated foot ulcers can lead to serious infections and even amputation, especially in diabetics. Early treatment is crucial.' },
      { question: 'How can I prevent corns and ulcers?', answer: 'Wear properly fitted shoes, use custom orthotics if needed, inspect feet daily, keep feet moisturized, and seek early treatment for any foot problems.' }
    ]
  },

  // ==================== DIABETIC FOOT SURGERY ====================
  
  'diabetic-foot-surgery': {
    name: 'Diabetic Foot and Nail Removal Surgery',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/diabetic-foot-surgery.jpg',
    tagline: 'Specialized Care for Diabetic Foot Complications',
    overview: 'Diabetic foot complications are a serious concern requiring specialized care. At Ruthvik Hospitals, we provide comprehensive treatment for diabetic foot infections, ulcers, and nail problems. Our multidisciplinary approach combines surgical expertise with diabetes management to save limbs, prevent amputations, and restore function. Early intervention is key to successful outcomes.',
    
    conditions: [
      'Diabetic foot ulcers',
      'Infected diabetic wounds',
      'Ingrown toenails in diabetics',
      'Fungal nail infections',
      'Gangrene (early stages)',
      'Charcot foot',
      'Osteomyelitis (bone infection)',
      'Diabetic neuropathy complications'
    ],
    
    symptoms: [
      'Non-healing wounds on feet',
      'Redness, swelling, warmth',
      'Foul-smelling discharge',
      'Fever and chills',
      'Painful or ingrown toenails',
      'Blackened tissue (gangrene)',
      'Loss of sensation in feet',
      'Difficulty walking'
    ],
    
    diagnosis: {
      description: 'Comprehensive evaluation to assess extent of infection and plan appropriate treatment.',
      methods: [
        { name: 'Physical Examination', description: 'Detailed foot examination including vascular and neurological assessment.' },
        { name: 'Blood Tests', description: 'Blood sugar levels, HbA1c, complete blood count, and inflammatory markers.' },
        { name: 'X-rays', description: 'To detect bone involvement or gas in tissues.' },
        { name: 'MRI', description: 'For suspected osteomyelitis or deep tissue infections.' },
        { name: 'Wound Culture', description: 'Identifying specific bacteria for targeted antibiotic therapy.' }
      ]
    },
    
    treatmentOptions: [
      { name: 'Surgical Debridement', description: 'Removal of infected and dead tissue to promote healing and prevent spread.' },
      { name: 'Nail Removal', description: 'Partial or complete nail removal for infected or ingrown nails.' },
      { name: 'Abscess Drainage', description: 'Surgical drainage of pus collections.' },
      { name: 'Minor Amputation', description: 'Removal of non-viable toe or part of foot to save the limb (when necessary).' }
    ],
    
    procedure: {
      description: 'Surgical treatment is tailored to the extent of infection and tissue viability.',
      duration: '30 minutes to 2 hours depending on complexity',
      anesthesia: 'Local, regional, or general anesthesia',
      steps: [
        { title: 'Anesthesia', description: 'Appropriate anesthesia for pain-free procedure.' },
        { title: 'Debridement', description: 'Thorough removal of all infected and dead tissue.' },
        { title: 'Nail Removal', description: 'If needed, removal of infected nail and nail bed treatment.' },
        { title: 'Irrigation', description: 'Copious washing with antiseptic solutions.' },
        { title: 'Wound Management', description: 'Application of specialized dressings or leaving wound open for healing.' }
      ]
    },
    
    benefits: [
      'Prevents limb amputation',
      'Controls infection spread',
      'Promotes wound healing',
      'Reduces pain and discomfort',
      'Improves quality of life',
      'Prevents life-threatening sepsis',
      'Restores mobility',
      'Comprehensive diabetes care'
    ],
    
    risks: [
      'Delayed healing due to diabetes',
      'Recurrent infection',
      'Need for repeat procedures',
      'Progression requiring amputation',
      'Anesthesia risks in diabetics',
      'Cardiovascular complications',
      'Kidney function changes'
    ],
    
    recovery: {
      timeline: '4-12 weeks depending on extent of surgery',
      stages: [
        {
          period: 'Week 1-2 (Acute Phase)',
          description: 'Infection control and initial healing.',
          instructions: ['Complete bed rest with foot elevation', 'IV antibiotics if needed', 'Daily dressing changes', 'Strict blood sugar control', 'No weight bearing on affected foot']
        },
        {
          period: 'Weeks 3-6 (Healing Phase)',
          description: 'Wound healing progresses.',
          instructions: ['Continue wound care', 'Gradual mobilization with walker/crutches', 'Oral antibiotics', 'Regular blood sugar monitoring', 'Nutritional support']
        },
        {
          period: 'Weeks 7-12 (Recovery Phase)',
          description: 'Return to walking with proper footwear.',
          instructions: ['Custom diabetic footwear', 'Daily foot inspections', 'Maintain optimal blood sugar', 'Regular follow-up', 'Preventive foot care']
        }
      ]
    },
    
    faqs: [
      { question: 'Can diabetic foot infections be cured?', answer: 'Yes, with early treatment, most diabetic foot infections can be successfully treated. The key is early intervention, good blood sugar control, and proper wound care.' },
      { question: 'Will I lose my foot?', answer: 'Our goal is always limb salvage. With timely treatment, most patients avoid major amputation. Early intervention significantly improves outcomes.' },
      { question: 'How long is the hospital stay?', answer: 'Hospital stay varies from 3-14 days depending on infection severity. Some patients may need IV antibiotics for several weeks.' },
      { question: 'Can the nail grow back after removal?', answer: 'If only the nail is removed, it will grow back in 6-12 months. If the nail bed is treated to prevent regrowth (for chronic problems), the nail will not return.' },
      { question: 'How can I prevent diabetic foot problems?', answer: 'Maintain good blood sugar control, inspect feet daily, wear proper footwear, never walk barefoot, keep feet clean and moisturized, and see a doctor immediately for any foot problems.' }
    ]
  },

  // ==================== ABDOMEN OBSTRUCTION ====================
  
  'abdomen-obstruction': {
    name: 'Abdomen Obstruction Surgery',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/abdomen-surgery.jpg',
    tagline: 'Emergency and Elective Surgery for Intestinal Obstructions',
    overview: 'Intestinal obstruction is a serious condition where the small or large intestine is partially or completely blocked. At Ruthvik Hospitals, we provide emergency and elective surgical treatment for various types of intestinal obstructions using advanced laparoscopic and open surgical techniques.',
    
    conditions: ['Small Bowel Obstruction', 'Large Bowel Obstruction', 'Adhesive Obstruction', 'Hernia-related Obstruction', 'Tumor-related Obstruction', 'Volvulus', 'Intussusception', 'Strictures'],
    
    symptoms: ['Severe abdominal pain', 'Abdominal distension', 'Vomiting', 'Inability to pass gas or stool', 'Constipation', 'Abdominal cramping', 'Loss of appetite', 'Dehydration'],
    
    diagnosis: {
      description: 'Comprehensive evaluation to identify the location and cause of obstruction.',
      methods: [
        { name: 'Physical Examination', description: 'Abdominal examination to assess distension, tenderness, and bowel sounds.' },
        { name: 'X-ray', description: 'Abdominal X-rays to visualize gas patterns and obstruction.' },
        { name: 'CT Scan', description: 'Detailed imaging to identify the exact location and cause of obstruction.' },
        { name: 'Blood Tests', description: 'To assess electrolyte imbalance and infection.' }
      ]
    },

    treatmentOptions: [
      { name: 'Conservative Management', description: 'Nasogastric decompression and IV fluids for partial obstructions.' },
      { name: 'Laparoscopic Surgery', description: 'Minimally invasive surgery to release adhesions or remove obstruction.' },
      { name: 'Open Surgery', description: 'Traditional surgery for complex or emergency cases.' },
      { name: 'Bowel Resection', description: 'Removal of damaged bowel segment if necessary.' }
    ],
    
    procedure: {
      description: 'Surgical intervention to relieve intestinal obstruction and restore normal bowel function.',
      duration: '1-3 hours',
      anesthesia: 'General anesthesia',
      steps: [
        { title: 'Preparation', description: 'Patient stabilization with IV fluids and nasogastric decompression.' },
        { title: 'Surgical Access', description: 'Laparoscopic or open approach based on severity.' },
        { title: 'Obstruction Release', description: 'Adhesiolysis, hernia repair, or bowel resection as needed.' },
        { title: 'Bowel Assessment', description: 'Checking bowel viability and blood supply.' },
        { title: 'Closure', description: 'Closing the surgical site with appropriate technique.' }
      ]
    },
    
    benefits: ['Relief from obstruction', 'Prevention of complications', 'Restoration of bowel function', 'Minimally invasive options available', 'Experienced surgical team'],
    
    risks: ['Infection', 'Bleeding', 'Anastomotic leak', 'Recurrent obstruction', 'Wound complications', 'Prolonged ileus'],
    
    recovery: {
      timeline: '5-10 days hospital stay, 4-6 weeks full recovery',
      stages: [
        { period: 'Days 1-3', description: 'Hospital monitoring, gradual diet advancement.', instructions: ['NPO initially', 'IV fluids', 'Pain management', 'Ambulation'] },
        { period: 'Days 4-7', description: 'Diet progression, discharge planning.', instructions: ['Soft diet', 'Monitor bowel function', 'Wound care', 'Activity as tolerated'] },
        { period: 'Weeks 2-6', description: 'Gradual return to normal activities.', instructions: ['Avoid heavy lifting', 'Balanced diet', 'Follow-up visits', 'Monitor for complications'] }
      ]
    },
    
    faqs: [
      { question: 'Is surgery always necessary?', answer: 'Not always. Partial obstructions may resolve with conservative management, but complete obstructions typically require surgery.' },
      { question: 'How long is recovery?', answer: 'Hospital stay is 5-10 days, with full recovery in 4-6 weeks depending on the type of surgery.' },
      { question: 'Can obstruction recur?', answer: 'There is a risk of recurrence, especially with adhesive obstructions. Following post-operative instructions helps minimize this risk.' }
    ]
  },

  // ==================== ANAL FISTULAS ====================
  
  'anal-fistulas': {
    name: 'Anal Fistula Surgery',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/anal-fistula.jpg',
    tagline: 'Advanced Treatment for Anal Fistulas',
    overview: 'An anal fistula is an abnormal tunnel between the anal canal and the skin near the anus. At Ruthvik Hospitals, we offer advanced surgical treatments including fistulotomy, LIFT procedure, and laser fistula treatment for effective and lasting relief.',
    
    conditions: ['Simple Fistula', 'Complex Fistula', 'High Fistula', 'Low Fistula', 'Recurrent Fistula', 'Multiple Fistulas', 'Horseshoe Fistula'],
    
    symptoms: ['Persistent drainage near anus', 'Pain and swelling', 'Recurrent abscess', 'Irritation of skin', 'Fever', 'Difficulty sitting', 'Foul-smelling discharge'],
    
    diagnosis: {
      description: 'Thorough examination to identify fistula tract and plan appropriate treatment.',
      methods: [
        { name: 'Physical Examination', description: 'Visual inspection and digital examination of the anal area.' },
        { name: 'Anoscopy', description: 'Examination of anal canal to locate internal opening.' },
        { name: 'MRI Fistulography', description: 'Detailed imaging to map complex fistula tracts.' },
        { name: 'Examination Under Anesthesia', description: 'Detailed assessment of fistula tract under anesthesia.' }
      ]
    },

    treatmentOptions: [
      { name: 'Fistulotomy', description: 'Surgical opening of the fistula tract for simple fistulas.' },
      { name: 'LIFT Procedure', description: 'Ligation of Intersphincteric Fistula Tract - sphincter-preserving technique.' },
      { name: 'Laser Fistula Treatment', description: 'Advanced laser ablation of fistula tract with minimal tissue damage.' },
      { name: 'Seton Placement', description: 'Placement of surgical thread to gradually cut through the tract.' }
    ],
    
    procedure: {
      description: 'Surgical treatment to eliminate the fistula tract and promote healing.',
      duration: '30-60 minutes',
      anesthesia: 'Spinal or general anesthesia',
      steps: [
        { title: 'Anesthesia', description: 'Patient positioned and anesthesia administered.' },
        { title: 'Fistula Identification', description: 'Locating internal and external openings of the fistula.' },
        { title: 'Tract Treatment', description: 'Fistulotomy, LIFT, or laser ablation based on fistula type.' },
        { title: 'Drainage', description: 'Ensuring complete drainage of any abscess cavity.' },
        { title: 'Wound Care', description: 'Dressing applied, usually left open to heal from inside out.' }
      ]
    },
    
    benefits: ['High success rate', 'Minimal recurrence', 'Sphincter preservation with LIFT/Laser', 'Same-day or next-day discharge', 'Quick return to work'],
    
    risks: ['Recurrence', 'Infection', 'Incontinence (rare with modern techniques)', 'Bleeding', 'Delayed healing'],
    
    recovery: {
      timeline: '2-4 weeks for healing, 4-6 weeks full recovery',
      stages: [
        { period: 'Week 1', description: 'Initial healing phase.', instructions: ['Sitz baths 3-4 times daily', 'Pain medication', 'High-fiber diet', 'Avoid straining'] },
        { period: 'Weeks 2-4', description: 'Continued healing.', instructions: ['Continue sitz baths', 'Wound care', 'Gradual activity increase', 'Follow-up visits'] },
        { period: 'Weeks 4-6', description: 'Complete healing.', instructions: ['Resume normal activities', 'Maintain good hygiene', 'High-fiber diet', 'Regular follow-up'] }
      ]
    },
    
    faqs: [
      { question: 'Will the fistula come back?', answer: 'With proper surgical technique, recurrence rate is low (5-10%). Complete excision of the tract is key to preventing recurrence.' },
      { question: 'Is there risk of incontinence?', answer: 'Modern techniques like LIFT and laser minimize this risk. Traditional fistulotomy has a small risk if sphincter muscle is involved.' },
      { question: 'How long until I can return to work?', answer: 'Most patients return to desk work in 1-2 weeks. Physical labor may require 3-4 weeks.' }
    ]
  },

  // ==================== CIRCUMCISION ====================
  
  'circumcision': {
    name: 'Circumcision (Laser & Stapler)',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/circumcision.jpg',
    tagline: 'Modern Circumcision with Laser and Stapler Techniques',
    overview: 'Circumcision is the surgical removal of the foreskin covering the head of the penis. At Ruthvik Hospitals, we offer advanced laser and stapler circumcision techniques that provide painless procedures, minimal bleeding, and faster healing compared to traditional methods.',
    
    conditions: ['Phimosis (tight foreskin)', 'Paraphimosis', 'Recurrent balanitis', 'Balanoposthitis', 'Foreskin infections', 'Religious/Cultural reasons', 'Personal preference', 'Hygiene concerns'],
    
    symptoms: ['Difficulty retracting foreskin', 'Pain during urination', 'Recurrent infections', 'Swelling of foreskin', 'Difficulty with hygiene', 'Pain during intercourse'],
    
    diagnosis: {
      description: 'Clinical examination to assess the need for circumcision.',
      methods: [
        { name: 'Physical Examination', description: 'Assessment of foreskin condition and retractability.' },
        { name: 'Medical History', description: 'Evaluation of symptoms and previous infections.' },
        { name: 'Urine Tests', description: 'If infection is suspected.' }
      ]
    },

    treatmentOptions: [
      { name: 'Laser Circumcision', description: 'Advanced laser technology for bloodless, painless circumcision with faster healing.' },
      { name: 'Stapler Circumcision', description: 'Modern stapling device for precise, quick circumcision with minimal bleeding.' },
      { name: 'Conventional Circumcision', description: 'Traditional surgical method using scalpel and sutures.' }
    ],
    
    procedure: {
      description: 'Surgical removal of foreskin using advanced laser or stapler technique.',
      duration: '20-30 minutes',
      anesthesia: 'Local anesthesia with sedation',
      steps: [
        { title: 'Anesthesia', description: 'Local anesthetic injection for pain-free procedure.' },
        { title: 'Marking', description: 'Precise marking of the circumcision line.' },
        { title: 'Foreskin Removal', description: 'Using laser or stapler device to remove foreskin with minimal bleeding.' },
        { title: 'Hemostasis', description: 'Ensuring complete control of bleeding.' },
        { title: 'Dressing', description: 'Application of sterile dressing.' }
      ]
    },
    
    benefits: ['Painless procedure', 'Minimal bleeding', 'No stitches with stapler method', 'Same-day discharge', 'Faster healing (7-10 days)', 'Better cosmetic results', 'Reduced infection risk', 'Improved hygiene'],
    
    risks: ['Minor bleeding', 'Infection (rare)', 'Swelling', 'Delayed healing', 'Scarring (minimal with laser/stapler)'],
    
    recovery: {
      timeline: '7-10 days for healing, 2-3 weeks full recovery',
      stages: [
        { period: 'Days 1-3', description: 'Initial healing phase.', instructions: ['Keep area clean and dry', 'Pain medication as needed', 'Avoid strenuous activity', 'Wear loose clothing'] },
        { period: 'Days 4-7', description: 'Continued healing.', instructions: ['Gentle cleaning', 'Apply prescribed ointment', 'Avoid sexual activity', 'Follow-up visit'] },
        { period: 'Weeks 2-3', description: 'Complete healing.', instructions: ['Resume normal activities', 'Sexual activity after 3 weeks', 'Maintain hygiene', 'Final check-up'] }
      ]
    },
    
    faqs: [
      { question: 'Is laser circumcision better than traditional?', answer: 'Yes, laser and stapler methods offer less pain, minimal bleeding, no stitches, and faster healing compared to traditional circumcision.' },
      { question: 'When can I return to work?', answer: 'Most patients return to work in 2-3 days for desk jobs. Physical labor may require 5-7 days.' },
      { question: 'When can I resume sexual activity?', answer: 'It is recommended to wait 3-4 weeks for complete healing before resuming sexual activity.' }
    ]
  },

  // ==================== ANAL FISSURES ====================
  
  'anal-fissures': {
    name: 'Anal Fissure Treatment',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/anal-fissure.jpg',
    tagline: 'Medical and Surgical Treatment for Anal Fissures',
    overview: 'An anal fissure is a small tear in the lining of the anus that causes pain and bleeding during bowel movements. At Ruthvik Hospitals, we offer both medical management and advanced surgical treatments including lateral internal sphincterotomy for chronic fissures.',
    
    conditions: ['Acute Anal Fissure', 'Chronic Anal Fissure', 'Anterior Fissure', 'Posterior Fissure', 'Multiple Fissures', 'Recurrent Fissures'],
    
    symptoms: ['Sharp pain during bowel movements', 'Bright red blood on stool or toilet paper', 'Visible tear in anal skin', 'Spasm of anal sphincter', 'Itching around anus', 'Skin tag near fissure'],
    
    diagnosis: {
      description: 'Clinical examination to identify and assess the fissure.',
      methods: [
        { name: 'Visual Examination', description: 'Gentle inspection of the anal area to visualize the fissure.' },
        { name: 'Digital Rectal Exam', description: 'Careful examination to rule out other conditions.' },
        { name: 'Anoscopy', description: 'If tolerated, to examine the anal canal.' }
      ]
    },

    treatmentOptions: [
      { name: 'Medical Management', description: 'Stool softeners, topical anesthetics, and nitroglycerin ointment for acute fissures.' },
      { name: 'Botox Injection', description: 'Injection of botulinum toxin to relax sphincter muscle.' },
      { name: 'Lateral Internal Sphincterotomy', description: 'Surgical division of internal sphincter muscle to reduce spasm and promote healing.' },
      { name: 'Fissurectomy', description: 'Surgical removal of chronic fissure with or without sphincterotomy.' }
    ],
    
    procedure: {
      description: 'Surgical treatment for chronic anal fissures that do not respond to medical management.',
      duration: '15-20 minutes',
      anesthesia: 'Local or spinal anesthesia',
      steps: [
        { title: 'Anesthesia', description: 'Patient positioned and anesthesia administered.' },
        { title: 'Sphincterotomy', description: 'Small incision in internal sphincter muscle to reduce spasm.' },
        { title: 'Fissure Excision', description: 'Removal of chronic fissure edges if needed.' },
        { title: 'Hemostasis', description: 'Ensuring bleeding control.' },
        { title: 'Dressing', description: 'Application of sterile dressing.' }
      ]
    },
    
    benefits: ['High success rate (95%+)', 'Immediate pain relief', 'Quick healing', 'Same-day discharge', 'Minimal recurrence', 'Return to normal activities quickly'],
    
    risks: ['Minor bleeding', 'Infection', 'Temporary incontinence to gas (rare)', 'Recurrence (rare)', 'Delayed healing'],
    
    recovery: {
      timeline: '2-3 weeks for complete healing',
      stages: [
        { period: 'Week 1', description: 'Initial healing phase.', instructions: ['Sitz baths 3-4 times daily', 'Stool softeners', 'High-fiber diet', 'Pain medication'] },
        { period: 'Weeks 2-3', description: 'Complete healing.', instructions: ['Continue sitz baths', 'Maintain soft stools', 'Avoid straining', 'Follow-up visit'] }
      ]
    },
    
    faqs: [
      { question: 'Will surgery cure my fissure?', answer: 'Yes, lateral internal sphincterotomy has a 95%+ success rate for chronic fissures that do not heal with medical treatment.' },
      { question: 'Is there risk of incontinence?', answer: 'The risk is very low (less than 5%) and usually temporary, involving minor gas incontinence.' },
      { question: 'How soon can I return to work?', answer: 'Most patients return to work in 3-5 days.' }
    ]
  },

  // ==================== REMAINING GENERAL SURGERY SERVICES ====================
  
  'hysterectomy': {
    name: 'Hysterectomy',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/hysterectomy.jpg',
    tagline: 'Laparoscopic and Vaginal Hysterectomy',
    overview: 'Hysterectomy is the surgical removal of the uterus. We offer minimally invasive laparoscopic and vaginal hysterectomy procedures for various gynecological conditions.',
    conditions: ['Uterine Fibroids', 'Endometriosis', 'Uterine Prolapse', 'Abnormal Bleeding', 'Chronic Pelvic Pain', 'Gynecological Cancer'],
    symptoms: ['Heavy menstrual bleeding', 'Pelvic pain', 'Pressure symptoms', 'Urinary problems'],
    diagnosis: { description: 'Comprehensive gynecological evaluation.', methods: [{ name: 'Pelvic Examination', description: 'Physical examination of reproductive organs.' }, { name: 'Ultrasound', description: 'Imaging to assess uterus and ovaries.' }, { name: 'MRI', description: 'Detailed imaging for complex cases.' }] },
    treatmentOptions: [{ name: 'Laparoscopic Hysterectomy', description: 'Minimally invasive removal through small incisions.' }, { name: 'Vaginal Hysterectomy', description: 'Removal through vaginal approach.' }, { name: 'Abdominal Hysterectomy', description: 'Traditional open surgery for complex cases.' }],
    procedure: { description: 'Surgical removal of uterus using minimally invasive techniques.', duration: '1-2 hours', anesthesia: 'General anesthesia', steps: [{ title: 'Anesthesia', description: 'Patient preparation and anesthesia.' }, { title: 'Surgical Access', description: 'Laparoscopic or vaginal approach.' }, { title: 'Uterus Removal', description: 'Careful dissection and removal of uterus.' }, { title: 'Closure', description: 'Closing incisions.' }] },
    benefits: ['Minimally invasive options', 'Faster recovery', 'Less pain', 'Smaller scars', 'Shorter hospital stay'],
    risks: ['Bleeding', 'Infection', 'Injury to surrounding organs', 'Blood clots', 'Anesthesia risks'],
    recovery: { timeline: '4-6 weeks', stages: [{ period: 'Week 1-2', description: 'Hospital stay and initial recovery.', instructions: ['Rest', 'Pain management', 'Avoid lifting', 'Follow-up'] }, { period: 'Weeks 3-6', description: 'Gradual return to activities.', instructions: ['Light activities', 'No heavy lifting', 'Pelvic rest', 'Regular check-ups'] }] },
    faqs: [{ question: 'Will I go through menopause?', answer: 'Only if ovaries are also removed. If ovaries are preserved, you will not experience immediate menopause.' }, { question: 'How long is recovery?', answer: 'Most women return to normal activities in 4-6 weeks.' }]
  },

  'appendicitis': {
    name: 'Appendicitis Surgery',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/appendicitis.jpg',
    tagline: 'Emergency Laparoscopic Appendectomy',
    overview: 'Appendicitis is inflammation of the appendix requiring emergency surgical removal. We perform laparoscopic appendectomy for faster recovery.',
    conditions: ['Acute Appendicitis', 'Perforated Appendix', 'Appendiceal Abscess', 'Chronic Appendicitis'],
    symptoms: ['Right lower abdominal pain', 'Nausea and vomiting', 'Fever', 'Loss of appetite', 'Abdominal tenderness'],
    diagnosis: { description: 'Clinical evaluation and imaging.', methods: [{ name: 'Physical Examination', description: 'Abdominal examination for tenderness.' }, { name: 'Blood Tests', description: 'Elevated white blood cell count.' }, { name: 'CT Scan', description: 'Imaging to confirm appendicitis.' }, { name: 'Ultrasound', description: 'Alternative imaging method.' }] },
    treatmentOptions: [{ name: 'Laparoscopic Appendectomy', description: 'Minimally invasive removal through small incisions.' }, { name: 'Open Appendectomy', description: 'Traditional surgery for complicated cases.' }],
    procedure: { description: 'Surgical removal of inflamed appendix.', duration: '30-60 minutes', anesthesia: 'General anesthesia', steps: [{ title: 'Anesthesia', description: 'Patient preparation.' }, { title: 'Laparoscopic Access', description: 'Small incisions for camera and instruments.' }, { title: 'Appendix Removal', description: 'Identification and removal of appendix.' }, { title: 'Closure', description: 'Closing small incisions.' }] },
    benefits: ['Minimally invasive', 'Quick recovery', 'Less pain', 'Small scars', 'Same or next-day discharge'],
    risks: ['Infection', 'Bleeding', 'Abscess formation', 'Injury to surrounding organs'],
    recovery: { timeline: '1-2 weeks', stages: [{ period: 'Days 1-3', description: 'Hospital stay and initial recovery.', instructions: ['Rest', 'Pain medication', 'Light diet', 'Ambulation'] }, { period: 'Weeks 1-2', description: 'Return to normal activities.', instructions: ['Avoid heavy lifting', 'Gradual activity increase', 'Follow-up visit'] }] },
    faqs: [{ question: 'Is surgery always necessary?', answer: 'Yes, appendicitis requires surgical removal to prevent rupture and complications.' }, { question: 'How soon can I return to work?', answer: 'Most patients return to work in 1-2 weeks.' }]
  },

  'breast-surgery': {
    name: 'Breast Surgery',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/breast-surgery.jpg',
    tagline: 'Comprehensive Breast Surgery',
    overview: 'We offer comprehensive breast surgery including lumpectomy, mastectomy, and breast reconstruction for benign and malignant conditions.',
    conditions: ['Breast Cancer', 'Fibroadenoma', 'Breast Cysts', 'Breast Abscess', 'Gynecomastia', 'Breast Lumps'],
    symptoms: ['Breast lump', 'Breast pain', 'Nipple discharge', 'Skin changes', 'Breast swelling'],
    diagnosis: { description: 'Comprehensive breast evaluation.', methods: [{ name: 'Clinical Examination', description: 'Physical examination of breasts.' }, { name: 'Mammography', description: 'X-ray imaging of breast tissue.' }, { name: 'Ultrasound', description: 'Imaging to characterize lumps.' }, { name: 'Biopsy', description: 'Tissue sampling for diagnosis.' }] },
    treatmentOptions: [{ name: 'Lumpectomy', description: 'Removal of breast lump with preservation of breast.' }, { name: 'Mastectomy', description: 'Complete removal of breast tissue.' }, { name: 'Breast Reconstruction', description: 'Reconstruction after mastectomy.' }],
    procedure: { description: 'Surgical treatment of breast conditions.', duration: '1-3 hours', anesthesia: 'General anesthesia', steps: [{ title: 'Anesthesia', description: 'Patient preparation.' }, { title: 'Surgical Approach', description: 'Incision based on procedure type.' }, { title: 'Tissue Removal', description: 'Removal of affected tissue.' }, { title: 'Closure', description: 'Careful closure for cosmetic result.' }] },
    benefits: ['Expert surgical care', 'Oncoplastic techniques', 'Cosmetic considerations', 'Comprehensive treatment'],
    risks: ['Bleeding', 'Infection', 'Scarring', 'Changes in breast sensation', 'Lymphedema'],
    recovery: { timeline: '2-6 weeks depending on procedure', stages: [{ period: 'Week 1-2', description: 'Initial healing.', instructions: ['Rest', 'Wound care', 'Pain management', 'Avoid lifting'] }, { period: 'Weeks 3-6', description: 'Gradual recovery.', instructions: ['Light activities', 'Follow-up', 'Physical therapy if needed'] }] },
    faqs: [{ question: 'Will I need chemotherapy?', answer: 'Treatment plan depends on diagnosis and staging. Your oncologist will discuss all treatment options.' }, { question: 'Can breast be reconstructed?', answer: 'Yes, breast reconstruction options are available and can be discussed with your surgeon.' }]
  },

  'thyroid-surgery': {
    name: 'Thyroid Surgery',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/thyroid.jpg',
    tagline: 'Minimally Invasive Thyroid Surgery',
    overview: 'We perform thyroid surgery for various thyroid conditions including goiter, thyroid nodules, and thyroid cancer using minimally invasive techniques.',
    conditions: ['Thyroid Nodules', 'Goiter', 'Thyroid Cancer', 'Hyperthyroidism', 'Thyroid Cysts'],
    symptoms: ['Neck swelling', 'Difficulty swallowing', 'Voice changes', 'Breathing difficulty', 'Thyroid dysfunction'],
    diagnosis: { description: 'Comprehensive thyroid evaluation.', methods: [{ name: 'Physical Examination', description: 'Neck examination for thyroid enlargement.' }, { name: 'Thyroid Function Tests', description: 'Blood tests for thyroid hormones.' }, { name: 'Ultrasound', description: 'Imaging of thyroid gland.' }, { name: 'Fine Needle Aspiration', description: 'Biopsy of thyroid nodules.' }] },
    treatmentOptions: [{ name: 'Thyroid Lobectomy', description: 'Removal of one lobe of thyroid.' }, { name: 'Total Thyroidectomy', description: 'Complete removal of thyroid gland.' }, { name: 'Minimally Invasive Surgery', description: 'Smaller incision techniques.' }],
    procedure: { description: 'Surgical removal of thyroid gland or nodules.', duration: '1-2 hours', anesthesia: 'General anesthesia', steps: [{ title: 'Anesthesia', description: 'Patient preparation.' }, { title: 'Incision', description: 'Small neck incision.' }, { title: 'Thyroid Removal', description: 'Careful dissection and removal.' }, { title: 'Nerve Preservation', description: 'Protecting vocal cord nerves.' }, { title: 'Closure', description: 'Cosmetic closure.' }] },
    benefits: ['Minimally invasive', 'Small scar', 'Nerve monitoring', 'Expert surgical care', 'Quick recovery'],
    risks: ['Bleeding', 'Infection', 'Voice changes', 'Low calcium levels', 'Need for thyroid hormone replacement'],
    recovery: { timeline: '2-3 weeks', stages: [{ period: 'Week 1', description: 'Initial recovery.', instructions: ['Rest', 'Soft diet', 'Pain management', 'Calcium monitoring'] }, { period: 'Weeks 2-3', description: 'Return to activities.', instructions: ['Gradual activity increase', 'Thyroid hormone medication', 'Follow-up'] }] },
    faqs: [{ question: 'Will I need thyroid medication?', answer: 'If total thyroidectomy is performed, lifelong thyroid hormone replacement is needed.' }, { question: 'Will there be a visible scar?', answer: 'The incision is made in a natural neck crease for minimal visibility.' }]
  },

  'penile-swelling': {
    name: 'Penile Swelling Treatment',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/penile-treatment.jpg',
    tagline: 'Treatment for Penile Swelling and Conditions',
    overview: 'We provide comprehensive treatment for various penile conditions causing swelling including infections, trauma, and other urological issues.',
    conditions: ['Penile Edema', 'Balanitis', 'Posthitis', 'Penile Trauma', 'Penile Infections', 'Paraphimosis'],
    symptoms: ['Penile swelling', 'Pain', 'Redness', 'Discharge', 'Difficulty urinating', 'Skin changes'],
    diagnosis: { description: 'Clinical evaluation of penile condition.', methods: [{ name: 'Physical Examination', description: 'Examination of affected area.' }, { name: 'Urine Tests', description: 'To check for infection.' }, { name: 'Blood Tests', description: 'If systemic infection suspected.' }, { name: 'Ultrasound', description: 'Imaging if needed.' }] },
    treatmentOptions: [{ name: 'Medical Management', description: 'Antibiotics and anti-inflammatory medications.' }, { name: 'Drainage', description: 'If abscess is present.' }, { name: 'Circumcision', description: 'For recurrent infections.' }, { name: 'Surgical Repair', description: 'For trauma cases.' }],
    procedure: { description: 'Treatment based on underlying cause.', duration: 'Varies', anesthesia: 'Local or general based on procedure', steps: [{ title: 'Assessment', description: 'Evaluation of condition.' }, { title: 'Treatment', description: 'Medical or surgical intervention.' }, { title: 'Follow-up', description: 'Monitoring healing.' }] },
    benefits: ['Expert care', 'Prompt treatment', 'Prevention of complications', 'Comprehensive approach'],
    risks: ['Infection', 'Recurrence', 'Scarring', 'Complications from underlying condition'],
    recovery: { timeline: '1-3 weeks depending on treatment', stages: [{ period: 'Week 1', description: 'Initial treatment.', instructions: ['Medications', 'Hygiene', 'Rest', 'Follow-up'] }, { period: 'Weeks 2-3', description: 'Recovery.', instructions: ['Continue treatment', 'Monitor symptoms', 'Preventive measures'] }] },
    faqs: [{ question: 'Is this condition serious?', answer: 'Most cases respond well to treatment. Early intervention prevents complications.' }, { question: 'Can it recur?', answer: 'Proper treatment and hygiene reduce recurrence risk.' }]
  },

  'cysts-lumps': {
    name: 'Cysts & Lumps Removal',
    category: 'General Surgery',
    doctor: 'Dr. Shalini Duvvada',
    image: '/services/cysts.jpg',
    tagline: 'Surgical Removal of Cysts and Lumps',
    overview: 'We provide expert surgical removal of various cysts and lumps including sebaceous cysts, lipomas, and other benign growths with excellent cosmetic results.',
    conditions: ['Sebaceous Cysts', 'Lipomas', 'Dermoid Cysts', 'Ganglion Cysts', 'Skin Tags', 'Benign Tumors'],
    symptoms: ['Visible lump', 'Swelling', 'Pain if infected', 'Cosmetic concern', 'Discharge if ruptured'],
    diagnosis: { description: 'Clinical examination and imaging if needed.', methods: [{ name: 'Physical Examination', description: 'Assessment of lump characteristics.' }, { name: 'Ultrasound', description: 'To determine nature of lump.' }, { name: 'Biopsy', description: 'If malignancy suspected.' }] },
    treatmentOptions: [{ name: 'Surgical Excision', description: 'Complete removal of cyst or lump.' }, { name: 'Minimal Incision Technique', description: 'Smaller incisions for better cosmetic result.' }, { name: 'Laser Removal', description: 'For selected cases.' }],
    procedure: { description: 'Surgical removal of cyst or lump.', duration: '15-45 minutes', anesthesia: 'Local anesthesia', steps: [{ title: 'Anesthesia', description: 'Local anesthetic injection.' }, { title: 'Incision', description: 'Small incision over the lump.' }, { title: 'Excision', description: 'Complete removal of cyst/lump.' }, { title: 'Closure', description: 'Careful closure for minimal scarring.' }] },
    benefits: ['Same-day procedure', 'Local anesthesia', 'Minimal scarring', 'Quick recovery', 'Excellent cosmetic results'],
    risks: ['Infection', 'Bleeding', 'Scarring', 'Recurrence (rare)', 'Nerve injury (rare)'],
    recovery: { timeline: '1-2 weeks', stages: [{ period: 'Days 1-7', description: 'Initial healing.', instructions: ['Keep wound clean', 'Avoid strenuous activity', 'Pain medication if needed', 'Suture removal at 7-10 days'] }, { period: 'Week 2', description: 'Complete healing.', instructions: ['Resume normal activities', 'Scar care', 'Follow-up if needed'] }] },
    faqs: [{ question: 'Will it come back?', answer: 'Complete excision has very low recurrence rate. Proper surgical technique is key.' }, { question: 'Will there be a scar?', answer: 'Minimal scarring with proper technique. Scars fade over time.' }]
  },

  // ==================== ORTHOPAEDIC SURGERY SERVICES ====================
  
  'hip-replacement': {
    name: 'Total Hip Replacement',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/hip-replacement.jpg',
    tagline: 'Advanced Total Hip Arthroplasty',
    overview: 'Total hip replacement surgery to relieve pain and restore function in patients with severe hip arthritis or injury.',
    conditions: ['Osteoarthritis', 'Rheumatoid Arthritis', 'Hip Fracture', 'Avascular Necrosis', 'Hip Dysplasia'],
    symptoms: ['Hip pain', 'Limited mobility', 'Stiffness', 'Difficulty walking', 'Pain at night'],
    diagnosis: { description: 'Comprehensive evaluation of hip condition.', methods: [{ name: 'Physical Examination', description: 'Assessment of hip range of motion and pain.' }, { name: 'X-rays', description: 'Imaging to assess joint damage.' }, { name: 'MRI', description: 'Detailed soft tissue evaluation.' }] },
    treatmentOptions: [{ name: 'Total Hip Replacement', description: 'Complete replacement of hip joint with prosthetic implant.' }, { name: 'Minimally Invasive Surgery', description: 'Smaller incision techniques for faster recovery.' }],
    procedure: { description: 'Surgical replacement of damaged hip joint.', duration: '1-2 hours', anesthesia: 'Spinal or general anesthesia', steps: [{ title: 'Anesthesia', description: 'Patient preparation.' }, { title: 'Incision', description: 'Surgical access to hip joint.' }, { title: 'Joint Replacement', description: 'Removal of damaged bone and insertion of prosthetic components.' }, { title: 'Closure', description: 'Closing the surgical site.' }] },
    benefits: ['Pain relief', 'Improved mobility', 'Better quality of life', 'Long-lasting results', 'Return to activities'],
    risks: ['Infection', 'Blood clots', 'Dislocation', 'Leg length difference', 'Implant wear'],
    recovery: { timeline: '3-6 months', stages: [{ period: 'Weeks 1-6', description: 'Initial recovery with physical therapy.', instructions: ['Use walker/crutches', 'Physical therapy', 'Pain management', 'Avoid hip flexion >90°'] }, { period: 'Months 2-6', description: 'Gradual return to activities.', instructions: ['Continue exercises', 'Increase activities', 'Follow precautions', 'Regular follow-up'] }] },
    faqs: [{ question: 'How long does the implant last?', answer: 'Modern hip implants typically last 15-20 years or more.' }, { question: 'When can I walk?', answer: 'Most patients walk with assistance the day after surgery.' }]
  },

  'knee-replacement': {
    name: 'Total Knee Replacement',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/knee-replacement.jpg',
    tagline: 'Advanced Total Knee Arthroplasty',
    overview: 'Total knee replacement surgery for severe knee arthritis providing pain relief and restored function.',
    conditions: ['Osteoarthritis', 'Rheumatoid Arthritis', 'Post-traumatic Arthritis', 'Knee Deformity'],
    symptoms: ['Knee pain', 'Swelling', 'Stiffness', 'Difficulty walking', 'Instability'],
    diagnosis: { description: 'Complete knee evaluation.', methods: [{ name: 'Physical Examination', description: 'Assessment of knee function.' }, { name: 'X-rays', description: 'Joint space and alignment evaluation.' }, { name: 'MRI', description: 'Soft tissue assessment.' }] },
    treatmentOptions: [{ name: 'Total Knee Replacement', description: 'Complete knee joint replacement.' }, { name: 'Partial Knee Replacement', description: 'Replacement of affected compartment only.' }],
    procedure: { description: 'Surgical replacement of knee joint.', duration: '1-2 hours', anesthesia: 'Spinal or general anesthesia', steps: [{ title: 'Preparation', description: 'Patient positioning.' }, { title: 'Joint Access', description: 'Surgical exposure of knee joint.' }, { title: 'Bone Preparation', description: 'Removal of damaged surfaces.' }, { title: 'Implant Placement', description: 'Insertion of prosthetic components.' }] },
    benefits: ['Pain relief', 'Improved mobility', 'Better quality of life', 'Long-lasting results'],
    risks: ['Infection', 'Blood clots', 'Stiffness', 'Implant loosening'],
    recovery: { timeline: '3-6 months', stages: [{ period: 'Weeks 1-6', description: 'Initial recovery.', instructions: ['Physical therapy', 'Pain management', 'Use of walker', 'Exercises'] }, { period: 'Months 2-6', description: 'Progressive recovery.', instructions: ['Continue therapy', 'Increase activities', 'Follow-up visits'] }] },
    faqs: [{ question: 'How long does recovery take?', answer: 'Most patients return to normal activities in 3-6 months.' }, { question: 'Will I need physical therapy?', answer: 'Yes, physical therapy is essential for optimal recovery.' }]
  },

  'robotic-knee': {
    name: 'Robotic-Assisted Knee Replacement',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/robotic-knee.jpg',
    tagline: 'Precision Robotic Knee Surgery',
    overview: 'State-of-the-art robotic-assisted knee replacement for enhanced precision and better outcomes.',
    conditions: ['Severe Knee Arthritis', 'Failed Previous Surgery', 'Complex Deformities'],
    symptoms: ['Chronic knee pain', 'Limited mobility', 'Knee instability'],
    diagnosis: { description: 'Advanced imaging and planning.', methods: [{ name: 'CT Scan', description: '3D modeling of knee joint.' }, { name: 'X-rays', description: 'Joint assessment.' }] },
    treatmentOptions: [{ name: 'Robotic Total Knee Replacement', description: 'Computer-assisted precision surgery.' }],
    procedure: { description: 'Robotic-guided knee replacement.', duration: '1.5-2 hours', anesthesia: 'Spinal or general', steps: [{ title: 'Pre-operative Planning', description: '3D CT-based surgical plan.' }, { title: 'Robotic Guidance', description: 'Precise bone cuts using robotic arm.' }, { title: 'Implant Placement', description: 'Optimal positioning of components.' }] },
    benefits: ['Enhanced precision', 'Better alignment', 'Faster recovery', 'Improved outcomes', 'Longer implant life'],
    risks: ['Standard surgical risks', 'Infection', 'Blood clots'],
    recovery: { timeline: '2-4 months', stages: [{ period: 'Weeks 1-4', description: 'Rapid initial recovery.', instructions: ['Physical therapy', 'Pain management', 'Exercises'] }, { period: 'Months 2-4', description: 'Return to activities.', instructions: ['Continue therapy', 'Gradual activity increase'] }] },
    faqs: [{ question: 'Is robotic surgery better?', answer: 'Robotic assistance provides enhanced precision and may lead to better outcomes and faster recovery.' }]
  },

  'arthroscopy': {
    name: 'Arthroscopic Surgeries',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/arthroscopy.jpg',
    tagline: 'Minimally Invasive Joint Surgery',
    overview: 'Keyhole surgery for diagnosis and treatment of joint problems with minimal invasiveness.',
    conditions: ['Meniscus Tears', 'Ligament Injuries', 'Cartilage Damage', 'Joint Inflammation', 'Loose Bodies'],
    symptoms: ['Joint pain', 'Swelling', 'Locking', 'Instability', 'Limited motion'],
    diagnosis: { description: 'Joint evaluation.', methods: [{ name: 'MRI', description: 'Soft tissue imaging.' }, { name: 'Physical Examination', description: 'Joint assessment.' }] },
    treatmentOptions: [{ name: 'Diagnostic Arthroscopy', description: 'Visual examination of joint.' }, { name: 'Therapeutic Arthroscopy', description: 'Treatment of joint problems.' }],
    procedure: { description: 'Minimally invasive joint surgery.', duration: '30-90 minutes', anesthesia: 'General or regional', steps: [{ title: 'Small Incisions', description: 'Tiny portals for camera and instruments.' }, { title: 'Joint Inspection', description: 'Visual examination.' }, { title: 'Treatment', description: 'Repair or removal of damaged tissue.' }] },
    benefits: ['Minimal scarring', 'Less pain', 'Faster recovery', 'Same-day surgery', 'Quick return to activities'],
    risks: ['Infection', 'Bleeding', 'Nerve injury', 'Blood clots'],
    recovery: { timeline: '2-6 weeks', stages: [{ period: 'Week 1-2', description: 'Initial healing.', instructions: ['Rest', 'Ice', 'Elevation', 'Pain medication'] }, { period: 'Weeks 3-6', description: 'Rehabilitation.', instructions: ['Physical therapy', 'Gradual activity increase'] }] },
    faqs: [{ question: 'Is arthroscopy painful?', answer: 'Most patients experience minimal pain due to small incisions.' }]
  },

  'ligament-reconstruction': {
    name: 'ACL/PCL/MCL Reconstruction',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/ligament.jpg',
    tagline: 'Expert Ligament Reconstruction Surgery',
    overview: 'Surgical reconstruction of torn knee ligaments for athletes and active individuals.',
    conditions: ['ACL Tear', 'PCL Tear', 'MCL Tear', 'Multi-ligament Injuries'],
    symptoms: ['Knee instability', 'Swelling', 'Pain', 'Giving way', 'Limited sports activity'],
    diagnosis: { description: 'Ligament injury assessment.', methods: [{ name: 'Physical Tests', description: 'Lachman, drawer tests.' }, { name: 'MRI', description: 'Ligament visualization.' }] },
    treatmentOptions: [{ name: 'ACL Reconstruction', description: 'Graft reconstruction of anterior cruciate ligament.' }, { name: 'PCL Reconstruction', description: 'Posterior cruciate ligament repair.' }, { name: 'MCL Repair', description: 'Medial collateral ligament treatment.' }],
    procedure: { description: 'Arthroscopic ligament reconstruction.', duration: '1-2 hours', anesthesia: 'General or spinal', steps: [{ title: 'Graft Harvest', description: 'Obtaining graft tissue.' }, { title: 'Tunnel Creation', description: 'Bone tunnels for graft placement.' }, { title: 'Graft Fixation', description: 'Securing new ligament.' }] },
    benefits: ['Restored stability', 'Return to sports', 'Prevents further damage', 'Minimally invasive'],
    risks: ['Infection', 'Graft failure', 'Stiffness', 'Re-injury'],
    recovery: { timeline: '6-9 months', stages: [{ period: 'Months 1-3', description: 'Protection and early rehab.', instructions: ['Brace use', 'Physical therapy', 'Range of motion exercises'] }, { period: 'Months 4-9', description: 'Progressive strengthening.', instructions: ['Sport-specific training', 'Gradual return to activities'] }] },
    faqs: [{ question: 'When can I return to sports?', answer: 'Most athletes return to sports in 6-9 months after proper rehabilitation.' }]
  },

  'orif': {
    name: 'Fracture Fixation (ORIF)',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/orif.jpg',
    tagline: 'Surgical Treatment of Complex Fractures',
    overview: 'Open reduction and internal fixation for complex fractures using plates, screws, and rods.',
    conditions: ['Complex Fractures', 'Displaced Fractures', 'Non-union', 'Mal-union', 'Open Fractures'],
    symptoms: ['Severe pain', 'Deformity', 'Inability to move limb', 'Swelling', 'Bruising'],
    diagnosis: { description: 'Fracture assessment.', methods: [{ name: 'X-rays', description: 'Fracture visualization.' }, { name: 'CT Scan', description: 'Detailed bone imaging.' }] },
    treatmentOptions: [{ name: 'Plate Fixation', description: 'Metal plates and screws.' }, { name: 'Intramedullary Nailing', description: 'Rod insertion into bone.' }, { name: 'External Fixation', description: 'External frame for complex cases.' }],
    procedure: { description: 'Surgical fracture stabilization.', duration: '1-3 hours', anesthesia: 'General or regional', steps: [{ title: 'Fracture Exposure', description: 'Surgical access to fracture site.' }, { title: 'Reduction', description: 'Realignment of bone fragments.' }, { title: 'Fixation', description: 'Placement of plates/screws/rods.' }] },
    benefits: ['Anatomic alignment', 'Stable fixation', 'Early mobilization', 'Better healing'],
    risks: ['Infection', 'Non-union', 'Hardware failure', 'Nerve/vessel injury'],
    recovery: { timeline: '3-6 months', stages: [{ period: 'Weeks 1-6', description: 'Protection phase.', instructions: ['Immobilization', 'Pain management', 'Wound care'] }, { period: 'Months 2-6', description: 'Rehabilitation.', instructions: ['Physical therapy', 'Progressive weight bearing', 'Strengthening'] }] },
    faqs: [{ question: 'Will hardware be removed?', answer: 'Hardware removal is optional and depends on symptoms and patient preference.' }]
  },

  'hand-wrist-surgery': {
    name: 'Hand & Wrist Surgery',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/hand-surgery.jpg',
    tagline: 'Specialized Hand and Wrist Procedures',
    overview: 'Expert surgical treatment for hand and wrist conditions including carpal tunnel, trigger finger, and fractures.',
    conditions: ['Carpal Tunnel Syndrome', 'Trigger Finger', 'Wrist Fractures', 'Hand Fractures', 'Tendon Injuries', 'Arthritis'],
    symptoms: ['Hand pain', 'Numbness', 'Weakness', 'Stiffness', 'Deformity'],
    diagnosis: { description: 'Hand and wrist evaluation.', methods: [{ name: 'Physical Examination', description: 'Function assessment.' }, { name: 'Nerve Studies', description: 'For carpal tunnel.' }, { name: 'X-rays', description: 'Bone imaging.' }] },
    treatmentOptions: [{ name: 'Carpal Tunnel Release', description: 'Decompression of median nerve.' }, { name: 'Trigger Finger Release', description: 'Tendon sheath release.' }, { name: 'Fracture Fixation', description: 'Surgical stabilization.' }],
    procedure: { description: 'Specialized hand surgery.', duration: '30-90 minutes', anesthesia: 'Local or regional', steps: [{ title: 'Anesthesia', description: 'Nerve block or local.' }, { title: 'Surgical Procedure', description: 'Specific treatment.' }, { title: 'Closure', description: 'Careful wound closure.' }] },
    benefits: ['Pain relief', 'Restored function', 'Minimal scarring', 'Quick recovery'],
    risks: ['Infection', 'Nerve injury', 'Stiffness', 'Scar sensitivity'],
    recovery: { timeline: '2-6 weeks', stages: [{ period: 'Weeks 1-2', description: 'Protection.', instructions: ['Splint use', 'Wound care', 'Elevation'] }, { period: 'Weeks 3-6', description: 'Rehabilitation.', instructions: ['Hand therapy', 'Exercises', 'Return to activities'] }] },
    faqs: [{ question: 'When can I use my hand?', answer: 'Light activities can resume in 1-2 weeks, full activities in 4-6 weeks.' }]
  },

  'limb-deformities': {
    name: 'Limb Deformity Correction',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/limb-correction.jpg',
    tagline: 'Correction of Congenital and Acquired Deformities',
    overview: 'Surgical correction of limb deformities to improve function and appearance.',
    conditions: ['Bow Legs', 'Knock Knees', 'Limb Length Discrepancy', 'Angular Deformities', 'Congenital Deformities'],
    symptoms: ['Visible deformity', 'Gait abnormality', 'Pain', 'Functional limitation'],
    diagnosis: { description: 'Deformity assessment.', methods: [{ name: 'Physical Examination', description: 'Alignment evaluation.' }, { name: 'Full-length X-rays', description: 'Precise measurement.' }, { name: 'CT Scan', description: 'Detailed planning.' }] },
    treatmentOptions: [{ name: 'Osteotomy', description: 'Bone cutting and realignment.' }, { name: 'External Fixation', description: 'Gradual correction with frame.' }, { name: 'Internal Fixation', description: 'Plates and screws.' }],
    procedure: { description: 'Surgical deformity correction.', duration: '2-4 hours', anesthesia: 'General', steps: [{ title: 'Planning', description: 'Precise surgical plan.' }, { title: 'Osteotomy', description: 'Bone cuts.' }, { title: 'Correction', description: 'Realignment.' }, { title: 'Fixation', description: 'Stabilization.' }] },
    benefits: ['Improved alignment', 'Better function', 'Pain relief', 'Enhanced appearance'],
    risks: ['Infection', 'Non-union', 'Nerve injury', 'Recurrence'],
    recovery: { timeline: '3-6 months', stages: [{ period: 'Months 1-3', description: 'Healing phase.', instructions: ['Protected weight bearing', 'Physical therapy'] }, { period: 'Months 4-6', description: 'Rehabilitation.', instructions: ['Progressive activities', 'Strengthening'] }] },
    faqs: [{ question: 'Is correction permanent?', answer: 'Yes, surgical correction provides permanent results in most cases.' }]
  },

  'oats': {
    name: 'Cartilage Transfer (OATS)',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/oats.jpg',
    tagline: 'Osteochondral Autograft Transfer',
    overview: 'Advanced cartilage restoration procedure for joint surface defects.',
    conditions: ['Cartilage Defects', 'Osteochondral Lesions', 'Post-traumatic Defects'],
    symptoms: ['Joint pain', 'Swelling', 'Catching', 'Limited motion'],
    diagnosis: { description: 'Cartilage defect assessment.', methods: [{ name: 'MRI', description: 'Cartilage visualization.' }, { name: 'Arthroscopy', description: 'Direct visualization.' }] },
    treatmentOptions: [{ name: 'OATS Procedure', description: 'Transfer of healthy cartilage plugs.' }, { name: 'Mosaicplasty', description: 'Multiple plug transfer.' }],
    procedure: { description: 'Cartilage plug transfer.', duration: '1-2 hours', anesthesia: 'General or spinal', steps: [{ title: 'Donor Site Harvest', description: 'Obtaining healthy cartilage plugs.' }, { title: 'Defect Preparation', description: 'Preparing recipient site.' }, { title: 'Plug Transfer', description: 'Inserting cartilage plugs.' }] },
    benefits: ['Natural cartilage restoration', 'Pain relief', 'Improved function', 'Prevents arthritis'],
    risks: ['Donor site pain', 'Infection', 'Graft failure'],
    recovery: { timeline: '4-6 months', stages: [{ period: 'Months 1-2', description: 'Protection.', instructions: ['Non-weight bearing', 'CPM machine', 'Physical therapy'] }, { period: 'Months 3-6', description: 'Progressive loading.', instructions: ['Gradual weight bearing', 'Strengthening', 'Return to activities'] }] },
    faqs: [{ question: 'How successful is OATS?', answer: 'OATS has excellent success rates for appropriate cartilage defects.' }]
  },

  'limb-lengthening': {
    name: 'Limb Lengthening',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/limb-lengthening.jpg',
    tagline: 'Gradual Limb Lengthening Surgery',
    overview: 'Specialized surgery to lengthen limbs using external fixation devices.',
    conditions: ['Limb Length Discrepancy', 'Short Stature', 'Congenital Deficiency', 'Post-traumatic Shortening'],
    symptoms: ['Leg length difference', 'Gait abnormality', 'Back pain', 'Functional limitation'],
    diagnosis: { description: 'Limb length assessment.', methods: [{ name: 'Scanogram', description: 'Precise length measurement.' }, { name: 'CT Scan', description: 'Detailed planning.' }] },
    treatmentOptions: [{ name: 'External Fixator Lengthening', description: 'Gradual distraction with external frame.' }, { name: 'Internal Lengthening Nail', description: 'Motorized intramedullary device.' }],
    procedure: { description: 'Limb lengthening surgery.', duration: '2-3 hours', anesthesia: 'General', steps: [{ title: 'Osteotomy', description: 'Controlled bone cut.' }, { title: 'Fixator Application', description: 'External or internal device.' }, { title: 'Gradual Lengthening', description: 'Daily adjustments over months.' }] },
    benefits: ['Corrects length discrepancy', 'Improves function', 'Better gait', 'Enhanced quality of life'],
    risks: ['Pin site infection', 'Nerve injury', 'Joint stiffness', 'Delayed union'],
    recovery: { timeline: '6-12 months', stages: [{ period: 'Months 1-4', description: 'Lengthening phase.', instructions: ['Daily adjustments', 'Pin care', 'Physical therapy'] }, { period: 'Months 5-12', description: 'Consolidation.', instructions: ['Bone healing', 'Frame removal', 'Rehabilitation'] }] },
    faqs: [{ question: 'How much can be lengthened?', answer: 'Typically 5-8 cm safely, sometimes more depending on the case.' }]
  },

  'scoliosis': {
    name: 'Scoliosis Correction',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/scoliosis.jpg',
    tagline: 'Spinal Deformity Correction Surgery',
    overview: 'Surgical correction of scoliosis to straighten the spine and prevent progression.',
    conditions: ['Adolescent Idiopathic Scoliosis', 'Adult Scoliosis', 'Congenital Scoliosis', 'Neuromuscular Scoliosis'],
    symptoms: ['Visible spine curvature', 'Uneven shoulders', 'Back pain', 'Breathing difficulty in severe cases'],
    diagnosis: { description: 'Scoliosis evaluation.', methods: [{ name: 'Physical Examination', description: 'Spine assessment.' }, { name: 'X-rays', description: 'Cobb angle measurement.' }, { name: 'MRI', description: 'Spinal cord evaluation.' }] },
    treatmentOptions: [{ name: 'Spinal Fusion', description: 'Fusion of vertebrae with instrumentation.' }, { name: 'Growing Rods', description: 'For young children.' }, { name: 'Vertebral Body Tethering', description: 'Growth modulation technique.' }],
    procedure: { description: 'Spinal correction surgery.', duration: '4-8 hours', anesthesia: 'General', steps: [{ title: 'Exposure', description: 'Surgical access to spine.' }, { title: 'Instrumentation', description: 'Placement of rods and screws.' }, { title: 'Correction', description: 'Gradual straightening.' }, { title: 'Fusion', description: 'Bone grafting.' }] },
    benefits: ['Spine straightening', 'Prevents progression', 'Improves appearance', 'Relieves pain', 'Better lung function'],
    risks: ['Infection', 'Neurological injury', 'Blood loss', 'Pseudarthrosis', 'Hardware failure'],
    recovery: { timeline: '6-12 months', stages: [{ period: 'Months 1-3', description: 'Initial healing.', instructions: ['Hospital stay 5-7 days', 'Pain management', 'Gradual mobilization'] }, { period: 'Months 4-12', description: 'Rehabilitation.', instructions: ['Physical therapy', 'Activity progression', 'Brace if needed'] }] },
    faqs: [{ question: 'Will I be able to bend my back?', answer: 'Some flexibility is lost in the fused area, but most daily activities are not affected.' }]
  },

  'diabetic-foot-ortho': {
    name: 'Diabetic Foot (Orthopaedic)',
    category: 'Orthopaedic Surgery',
    doctor: 'Dr. Karthik Paidi',
    image: '/services/diabetic-foot-ortho.jpg',
    tagline: 'Orthopaedic Management of Diabetic Foot',
    overview: 'Specialized orthopaedic care for diabetic foot complications including Charcot foot and deformities.',
    conditions: ['Charcot Foot', 'Diabetic Foot Deformities', 'Foot Ulcers with Bone Involvement', 'Osteomyelitis'],
    symptoms: ['Foot deformity', 'Swelling', 'Redness', 'Ulceration', 'Bone prominence'],
    diagnosis: { description: 'Diabetic foot assessment.', methods: [{ name: 'Physical Examination', description: 'Foot evaluation.' }, { name: 'X-rays', description: 'Bone changes.' }, { name: 'MRI', description: 'Infection assessment.' }, { name: 'Vascular Studies', description: 'Blood flow evaluation.' }] },
    treatmentOptions: [{ name: 'Conservative Management', description: 'Offloading and bracing.' }, { name: 'Surgical Reconstruction', description: 'Correction of deformities.' }, { name: 'Arthrodesis', description: 'Joint fusion for stability.' }, { name: 'Amputation', description: 'When necessary for limb salvage.' }],
    procedure: { description: 'Orthopaedic diabetic foot surgery.', duration: '1-4 hours', anesthesia: 'Spinal or general', steps: [{ title: 'Assessment', description: 'Evaluation of foot condition.' }, { title: 'Debridement', description: 'Removal of infected tissue.' }, { title: 'Reconstruction', description: 'Correction of deformity.' }, { title: 'Fixation', description: 'Stabilization if needed.' }] },
    benefits: ['Limb salvage', 'Ulcer healing', 'Improved stability', 'Better function', 'Prevention of amputation'],
    risks: ['Infection', 'Non-union', 'Recurrent ulceration', 'Amputation if severe'],
    recovery: { timeline: '3-6 months', stages: [{ period: 'Months 1-3', description: 'Non-weight bearing.', instructions: ['Total contact cast', 'Wound care', 'Blood sugar control'] }, { period: 'Months 4-6', description: 'Progressive weight bearing.', instructions: ['Custom footwear', 'Gradual mobilization', 'Regular monitoring'] }] },
    faqs: [{ question: 'Can amputation be avoided?', answer: 'With early intervention and proper treatment, most diabetic foot problems can be managed without amputation.' }, { question: 'How important is blood sugar control?', answer: 'Excellent blood sugar control is critical for healing and preventing complications.' }]
  }
};

export default servicesData;

