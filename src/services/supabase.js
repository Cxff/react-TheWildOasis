import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://riaaijxzvfvqmtdaicwc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpYWFpanh6dmZ2cW10ZGFpY3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2NzQ0ODQsImV4cCI6MjAzMTI1MDQ4NH0.h28mYba75pmLCv_GFTMsWBvTbxdn3MO9H8MtMgFMFJ4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
