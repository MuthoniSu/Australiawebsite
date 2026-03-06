import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ffwjecuqbynduhcuoypv.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_U7RAt7Tu1-CQLTp3Ci1JKg_vGxfpYty";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testInsert() {
  console.log("Testing insert into 'applications' table...");
  const { data, error } = await supabase
    .from('applications')
    .insert([{
      application_number: "APP-TEST123",
      email: "test@example.com",
      phone: "+1234567890",
      experience: "5 years",
      relocate: "Yes",
      language: "English",
      status: "Pending"
    }])
    .select();

  if (error) {
    console.error("Error inserting record:", error);
  } else {
    console.log("Success! Data inserted:", data);
  }
}

testInsert();
