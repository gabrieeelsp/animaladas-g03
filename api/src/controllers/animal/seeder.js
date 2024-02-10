const { Animal } = require('../../db');
const {
    genderList,
    speciesList,
    statusList,
    sizeList,
} = require('../../utils');

const nombreArray = [
    'Jack Skellington',
    'Oogie Boogie',
    'Sally',
    'Doctor Finklenstein',
    'Alcalde',
    'Lock',
    'Demonio Arlequín',
    'Niño Cadáver',
    'Criatura de la olla',
    'Payaso',
    'Satán',
    'Mama Cadáver',
    'Bruja',
    'Corpse Dad',
    'Barrel',
    'Victor Van Dort',
    'Emily',
    'Victoria Everglot',
    'Lord Barkis',
    'Gusano',
    'Bonejangles',
    'Finis Everglot',
    'Mayhew',
    'Pastor Galswells',
    'Nell Van Dort',
    'Maudeline Everglot',
    'Pregonero',
    'Anciana Gertrudis',
    'Hildegarde',
    'Poul el camarero',
    'Emil',
    'Niño Cadaver',
    'Sweeney Todd',
    'Mrs. Lovett',
    'Judge Turpin',
    'Adolfo Pirelli',
    'Anthony',
];

const imageCats = [
    'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://th.bing.com/th/id/R.0d9485dc806ea94b7a018bcaa882ca02?rik=WI4DM4oEpwfAKg&pid=ImgRaw&r=0',
    'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1416803/pexels-photo-1416803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/18723056/pexels-photo-18723056/free-photo-of-animal-mascota-hierba-prado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/12831255/pexels-photo-12831255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/13722001/pexels-photo-13722001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];
const imageDogs = [
    'https://cdn.pixabay.com/photo/2017/06/24/09/13/continental-bulldog-2437110_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/31/21/15/dog-2561134_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/01/09/48/jack-russell-2029214_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/03/18/18/06/australian-shepherd-3237735_1280.jpg',
    'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/101635/pexels-photo-101635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/128817/pexels-photo-128817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const weightMin = 1;
const weightMax = 60;

const estimatedBirthYearMin = 2005;
const estimatedBirthYearMax = 2024;

module.exports = async () => {
    await Animal.destroy({
        where: {},
        force: true,
    });

    await Animal.bulkCreate(
        nombreArray.map((item) => {
            const isDog = Math.random() < 0.5;
            return {
                name: item,
                gender: genderList[
                    Math.floor(Math.random() * genderList.length)
                ],
                species: isDog ? 'perro' : 'gato',
                status: statusList[
                    Math.floor(Math.random() * statusList.length)
                ],
                size: sizeList[Math.floor(Math.random() * sizeList.length)],
                weight: Math.floor(
                    Math.random() * (weightMax - weightMin + 1) + weightMin,
                ),
                enabled: Math.random() < 0.9,
                vaccines: Math.random() < 0.5,
                // color: colorList[0],
                disability_illness: Math.random() < 0.5,
                castrated: Math.random() < 0.5,
                estimatedBirthYear: Math.floor(
                    Math.random() *
                        (estimatedBirthYearMax - estimatedBirthYearMin + 1) +
                        estimatedBirthYearMin,
                ),
                image1: isDog
                    ? imageDogs[Math.floor(Math.random() * imageDogs.length)]
                    : imageCats[Math.floor(Math.random() * imageCats.length)],
                image2: isDog
                    ? imageDogs[Math.floor(Math.random() * imageDogs.length)]
                    : imageCats[Math.floor(Math.random() * imageCats.length)],
                image3: isDog
                    ? imageDogs[Math.floor(Math.random() * imageDogs.length)]
                    : imageCats[Math.floor(Math.random() * imageCats.length)],
            };
        }),
    );

    // await Animal.bulkCreate([
    //     {
    //         name: 'lokito',
    //         gender: 'male',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2011,
    //     },
    //     {
    //         name: 'lokita',
    //         gender: 'female',
    //         species: 'cat',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2005,
    //     },
    //     {
    //         name: 'messi',
    //         gender: 'male',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2022,
    //     },
    //     {
    //         name: 'jack',
    //         gender: 'male',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2010,
    //     },
    //     {
    //         name: 'victor',
    //         gender: 'male',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2020,
    //     },
    //     {
    //         name: 'emily',
    //         gender: 'female',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2022,
    //     },
    //     {
    //         name: 'victoria',
    //         gender: 'female',
    //         species: 'dog',
    //         status: 'adopted',
    //         size: 'medium',
    //         weight: 20,
    //         vaccines: true,
    //         // color: colorList[0],
    //         disability_illness: true,
    //         castrated: false,
    //         estimatedBirthYear: 2011,
    //     },
    // ]);
};
