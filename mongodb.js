import  { MongoClient }  from'mongodb';

const url = "mongodb+srv://abdooy640:node_123@nodejs.vkc2u.mongodb.net/?retryWrites=true&w=majority&appName=nodejs"; 

const client = new MongoClient(url);

const main = async () => {
  try {
    await client.connect(); // الاتصال بقاعدة البيانات
    console.log("✅ Connected to MongoDB");

    const database = client.db("courses"); // اسم قاعدة البيانات الصحيح
    const collection = database.collection("laren"); // اسم الكولكشن الصحيح

    const data = await collection.find({}).toArray(); // جلب البيانات من الكولكشن
    console.log("📦 Data:", data);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  } finally {
    await client.close(); // غلق الاتصال بعد الانتهاء
    console.log("🔌 Connection closed");
  }
};

main();
