const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

exports.handler = async (event, context) => {
  console.log('get-doctors function called');
  
  // Only allow GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    console.log('Fetching doctors from Supabase...');
    console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'Set' : 'Not set');
    console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? 'Set' : 'Not set');
    
    const { data, error } = await supabase
      .from('doctors')
      .select('*')
      .order('name');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Doctors fetched:', data ? data.length : 0);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data || [])
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch doctors', details: error.message })
    };
  }
};
