const { default: mongoose } = require("mongoose");
const Ingredient = require("../api/models/ingredients.models");
const dotenv = require('dotenv').config();

const arrayIngredients = 
[
    {
      "name": "Avena",
      "description": "La avena es un grano saludable y versátil, rico en fibra y nutrientes esenciales.",
      "category": "Cereales",
      "energeticValue": "389 kcal",
      "totalFat": "6.9 g",
      "saturatedFat": "1.2 g",
      "carbs": "67.7 g",
      "sugars": "0.99 g",
      "sodium": "0.01 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973974/recetas/ingredientes/avena_fuaii0.png"
    },
    {
      "name": "Manzana",
      "description": "La manzana es una fruta deliciosa y nutritiva, rica en fibra y antioxidantes.",
      "category": "Fruta",
      "energeticValue": "52 kcal",
      "totalFat": "0.2 g",
      "saturatedFat": "0.03 g",
      "carbs": "14 g",
      "sugars": "10 g",
      "sodium": "0.01 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973987/recetas/ingredientes/manzana_u5ihlu.png"
    },
    {
      "name": "Salmón",
      "description": "El salmón es un pescado rico en ácidos grasos omega-3 y proteínas de alta calidad.",
      "category": "Pescado",
      "energeticValue": "206 kcal",
      "totalFat": "13.4 g",
      "saturatedFat": "3.1 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "0.06 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772974004/recetas/ingredientes/salm%C3%B3n_kssxtf.png"
    },
    {
      "name": "Espinacas",
      "description": "Las espinacas son una verdura de hojas verdes cargada de hierro y vitaminas.",
      "category": "Vegetales",
      "energeticValue": "23 kcal",
      "totalFat": "0.4 g",
      "saturatedFat": "0.1 g",
      "carbs": "3.6 g",
      "sugars": "0.4 g",
      "sodium": "0.08 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973981/recetas/ingredientes/espinacas_j8kavh.png"
    },
    {
      "name": "Huevo",
      "description": "El huevo es una fuente de proteínas de alta calidad y varios nutrientes esenciales.",
      "category": "Otros",
      "energeticValue": "155 kcal",
      "totalFat": "10.6 g",
      "saturatedFat": "3.3 g",
      "carbs": "1.1 g",
      "sugars": "1.1 g",
      "sodium": "0.13 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973983/recetas/ingredientes/huevo_tbyuqi.png"
    },
    {
      "name": "Quinoa",
      "description": "La quinoa es un superalimento rico en proteínas, fibra y minerales.",
      "category": "Cereales",
      "energeticValue": "120 kcal",
      "totalFat": "1.9 g",
      "saturatedFat": "0.2 g",
      "carbs": "21.3 g",
      "sugars": "0.9 g",
      "sodium": "0.02 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772974003/recetas/ingredientes/quinoa_rkzqzw.png"
    },
    {
      "name": "Plátano",
      "description": "El plátano es una fruta energética y rica en potasio, vitaminas y fibra.",
      "category": "Fruta",
      "energeticValue": "89 kcal",
      "totalFat": "0.3 g",
      "saturatedFat": "0.1 g",
      "carbs": "23 g",
      "sugars": "12 g",
      "sodium": "0.01 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772974000/recetas/ingredientes/pl%C3%A1tano_ls4xq9.png"
    },
    {
      "name": "Nueces",
      "description": "Las nueces son frutos secos llenos de grasas saludables, proteínas y antioxidantes.",
      "category": "Frutos secos",
      "energeticValue": "654 kcal",
      "totalFat": "65.2 g",
      "saturatedFat": "6.1 g",
      "carbs": "13.7 g",
      "sugars": "2.6 g",
      "sodium": "0.01 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973989/recetas/ingredientes/nueces_c6mg5j.png"
    },
    {
      "name": "Brócoli",
      "description": "El brócoli es una verdura crucífera llena de vitaminas y antioxidantes.",
      "category": "Vegetales",
      "energeticValue": "34 kcal",
      "totalFat": "0.6 g",
      "saturatedFat": "0.1 g",
      "carbs": "6.6 g",
      "sugars": "1.5 g",
      "sodium": "0.33 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973975/recetas/ingredientes/br%C3%B3coli_pdl7ou.png"
    },
    {
      "name": "Pavo",
      "description": "El pavo es una carne magra rica en proteínas y baja en grasa.",
      "category": "Carne",
      "energeticValue": "135 kcal",
      "totalFat": "1.1 g",
      "saturatedFat": "0.3 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "0.05 g",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973992/recetas/ingredientes/pavo_hkfswu.png"
    },
    {
      "name": "Pimiento rojo",
      "description": "El pimiento rojo es una verdura sabrosa y llena de vitamina C.",
      "category": "Vegetales",
      "energeticValue": "31 kcal",
      "totalFat": "0.4 g",
      "saturatedFat": "0.1 g",
      "carbs": "7.2 g",
      "sugars": "4.2 g",
      "sodium": "1 mg",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973997/recetas/ingredientes/pimiento-rojo_mehtsf.png"
  },
  {
      "name": "Cebolla",
      "description": "La cebolla es un aromatizante esencial en muchas cocinas.",
      "category": "Vegetales",
      "energeticValue": "40 kcal",
      "totalFat": "0.1 g",
      "saturatedFat": "0 g",
      "carbs": "9.3 g",
      "sugars": "4.7 g",
      "sodium": "2 mg",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973978/recetas/ingredientes/cebolla_wnzyk3.png"
  },
  {
      "name": "Ajo",
      "description": "El ajo es una especia con un sabor fuerte y beneficios para la salud.",
      "category": "Vegetales",
      "energeticValue": "149 kcal",
      "totalFat": "0.5 g",
      "saturatedFat": "0.2 g",
      "carbs": "33.1 g",
      "sugars": "1 g",
      "sodium": "17 mg",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973973/recetas/ingredientes/ajo_xldch4.png"
  },
  {
      "name": "Aceite de oliva",
      "description": "El aceite de oliva es una grasa saludable ampliamente utilizada en la cocina mediterránea.",
      "category": "Aceites",
      "energeticValue": "884 kcal",
      "totalFat": "100 g",
      "saturatedFat": "14 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "2 mg",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973972/recetas/ingredientes/aceite_de_oliva_c6w1c8.png"
  },
  {
      "name": "Pechuga de pollo",
      "description": "La pechuga de pollo es una fuente magra de proteína.",
      "category": "Carne",
      "energeticValue": "165 kcal",
      "totalFat": "3.6 g",
      "saturatedFat": "1 g",
      "carbs": "0 g",
      "sugars": "0 g",
      "sodium": "74 mg",
      "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973992/recetas/ingredientes/pechuga_de_pollo_eays0u.png"
  },
  {
    "name": "Tomate",
    "description": "El tomate es una fruta versátil y rica en vitamina C.",
    "category": "Vegetales",
    "energeticValue": "18 kcal",
    "totalFat": "0.2 g",
    "saturatedFat": "0 g",
    "carbs": "3.9 g",
    "sugars": "2.6 g",
    "sodium": "5 mg",
    "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772974007/recetas/ingredientes/tomate_uvooha.png"
},
{
    "name": "Zanahoria",
    "description": "La zanahoria es una raíz dulce y crujiente llena de vitamina A.",
    "category": "Vegetales",
    "energeticValue": "41 kcal",
    "totalFat": "0.2 g",
    "saturatedFat": "0 g",
    "carbs": "10 g",
    "sugars": "4.7 g",
    "sodium": "69 mg",
    "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772974007/recetas/ingredientes/zanahoria_mn60z8.png"
},
{
    "name": "Limón",
    "description": "El limón es una fruta cítrica ácida utilizada para dar sabor y aroma.",
    "category": "Fruta",
    "energeticValue": "29 kcal",
    "totalFat": "0.3 g",
    "saturatedFat": "0 g",
    "carbs": "9.3 g",
    "sugars": "2.5 g",
    "sodium": "2 mg",
    "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973985/recetas/ingredientes/lim%C3%B3n_yxtbth.png"
},
{
    "name": "Harina de trigo integral",
    "description": "La pasta de trigo integral es una opción más saludable que la pasta regular.",
    "category": "Cereales",
    "energeticValue": "180 kcal",
    "totalFat": "1 g",
    "saturatedFat": "0.2 g",
    "carbs": "39 g",
    "sugars": "2 g",
    "sodium": "2 mg",
    "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973982/recetas/ingredientes/harina_de_tirgo_xfxbja.png"
},
{
    "name": "Pimiento verde",
    "description": "El pimiento verde es un vegetal crujiente y bajo en calorías.",
    "category": "Vegetales",
    "energeticValue": "20 kcal",
    "totalFat": "0.2 g",
    "saturatedFat": "0 g",
    "carbs": "4.6 g",
    "sugars": "2.4 g",
    "sodium": "2 mg",
    "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973998/recetas/ingredientes/pimiento-verde_s62lkt.png"
},
{
  "name": "Patatas",
  "description": "Las patatas son un vegetal versátil y abundante en carbohidratos.",
  "category": "Vegetales",
  "energeticValue": "77 kcal",
  "totalFat": "0.1 g",
  "saturatedFat": "0 g",
  "carbs": "17 g",
  "sugars": "1 g",
  "sodium": "6 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973990/recetas/ingredientes/patatas_v4vh8p.png"
},
{
  "name": "Perejil",
  "description": "El perejil es una hierba aromática utilizada para realzar el sabor de los platos.",
  "category": "Especias",
  "energeticValue": "36 kcal",
  "totalFat": "0.8 g",
  "saturatedFat": "0.1 g",
  "carbs": "6.3 g",
  "sugars": "0.9 g",
  "sodium": "56 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973995/recetas/ingredientes/perejil_z56xo4.png"
},
{
  "name": "Calabacín",
  "description": "El calabacín es una verdura de sabor suave y textura tierna.",
  "category": "Vegetales",
  "energeticValue": "17 kcal",
  "totalFat": "0.3 g",
  "saturatedFat": "0.1 g",
  "carbs": "3.1 g",
  "sugars": "2.4 g",
  "sodium": "8 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973977/recetas/ingredientes/calabac%C3%ADn_vb6dne.png"
},
{
  "name": "Aguacate",
  "description": "El aguacate es una fruta cremosa y rica en grasas saludables.",
  "category": "Fruta",
  "energeticValue": "160 kcal",
  "totalFat": "14.7 g",
  "saturatedFat": "2.1 g",
  "carbs": "8.5 g",
  "sugars": "0.2 g",
  "sodium": "7 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973972/recetas/ingredientes/aguacate_uys9ri.png"
},
{
  "name": "Albahaca",
  "description": "La albahaca es una hierba aromática utilizada en la cocina italiana.",
  "category": "Especias",
  "energeticValue": "23 kcal",
  "totalFat": "0.6 g",
  "saturatedFat": "0.1 g",
  "carbs": "2.7 g",
  "sugars": "0.3 g",
  "sodium": "4 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973974/recetas/ingredientes/albahaca_m5lelb.png"
},
{
  "name": "Judías verdes",
  "description": "Las judías verdes son un vegetal bajo en calorías y rico en fibra.",
  "category": "Vegetales",
  "energeticValue": "31 kcal",
  "totalFat": "0.2 g",
  "saturatedFat": "0 g",
  "carbs": "7.1 g",
  "sugars": "2.9 g",
  "sodium": "6 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973984/recetas/ingredientes/jud%C3%ADas_verdes_jkeb8v.png"
},
{
  "name": "Pimienta negra",
  "description": "La pimienta negra es una especia picante ampliamente utilizada en la cocina.",
  "category": "Especias",
  "energeticValue": "251 kcal",
  "totalFat": "3.3 g",
  "saturatedFat": "1 g",
  "carbs": "64 g",
  "sugars": "0.6 g",
  "sodium": "20 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973995/recetas/ingredientes/pimienta_negra_xuc7xm.png"
},
{
  "name": "Champiñones",
  "description": "Los champiñones son hongos suaves y versátiles utilizados en una variedad de platos.",
  "category": "Hongos",
  "energeticValue": "22 kcal",
  "totalFat": "0.3 g",
  "saturatedFat": "0 g",
  "carbs": "3.3 g",
  "sugars": "1.7 g",
  "sodium": "5 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772973979/recetas/ingredientes/champi%C3%B1ones_ec7h9b.png"
},
{
  "name": "Puerro",
  "description": "El puerro es una verdura de sabor suave y aroma similar a la cebolla.",
  "category": "Vegetales",
  "energeticValue": "61 kcal",
  "totalFat": "0.5 g",
  "saturatedFat": "0.1 g",
  "carbs": "14.9 g",
  "sugars": "3.9 g",
  "sodium": "20 mg",
  "image": "https://res.cloudinary.com/dnisd4vxs/image/upload/v1772974001/recetas/ingredientes/puerro_yctonx.png"
}

]

const DB_URI= process.env.DB_URI;

mongoose.connect(DB_URI)
.then(async()=> {
    const allIngredients = await Ingredient.find();
    if (allIngredients.length > 0) {
        await Ingredient.collection.drop();
        console.log("Ingredients deleted");
    }
})
.catch((error)=> console.log("error deleting ingredients",error))
.then(async ()=> {
    const ingredientMap = arrayIngredients.map((ingredient) => new Ingredient(ingredient));
    await Ingredient.insertMany(ingredientMap);
    console.log("ingredients insert correctly");
})
.catch((error) => console.log("error inserting ingredients", error))
.finally(()=> mongoose.disconnect())