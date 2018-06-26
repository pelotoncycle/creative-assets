<template>
	<assets :imageTypes="imageTypes" />
</template>

<script>
import assets from '@/components/assets'

export default {
	async asyncData({ app }) {

		let jumbotron_url_ios = []
		let web_instructor_list_display_image_url = []
		let ios_instructor_list_display_image_url = []
		let image_url = []
    let about_image_url = []
    let workout_base_images = [
      {
        name: "Emily DeBouver",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/5f8e6fc465694a868fe524e03f0a4631",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Hallie Wilson",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b81c33e82a734f7c953ce90545ff0cf8",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8e1c630004df401684c662e7dc6ab7d0",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Danny Zapata",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8db086c4dbdc4fd8ac7a7109f654f5e3",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Colleen Saidman Yee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/d9e608a0c7654afe95c8384281455095",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jacqueline Howard",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/2539e925c2c64a6b8263f0d67fd2315a",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/970c398ecfc246a48b164985c09f6f18",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/9d7a63af4ce24535b779d56431759dc7",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Chase Tucker",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b6361e9e112644f4b2e11cdd596dc0ce",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jerry Munk",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/81fcf24612814946bd59b0b81b1c4071",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8697e0abee5a485ca2d84cac1ecd0378",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Erin Schirack",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/f250bd7c6f1948b1918028e096f5b392",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Sho Pettaway",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/2b5e07d229424ed795529616c98c3208",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Andrea Wright",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/aa1c0b5b9a41499f88e339e9006f5038",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Chase Tucker",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/9a391786d1bd4c1f8a693c635ae9c918",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Chase Tucker",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/aeeca686867446839b7a9ce2f0c2a8ae",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Hannah Marie Corbin",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/f79de571dc374aa3851d876246f328e5",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jess King",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/01e3d18684384eef81f4b58f0afc1f74",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Steph Nieman",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/50148c703a8a40af9ef06b45a9351fc1",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Dani Muckley",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/2feaa6b567774f2b8e833339b6474937",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jake Lestan",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/138d0efb709e443688205fd1d59444b2",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Sarah Shaw",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8d43aec890494901a2370d8c078963b4",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Dustin Hogue",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/a75057179f744933884bb8c547b46c4e",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/4bbe4dfa8a9a408aa023e6c1e8a54e9c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Denis Morton",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/4fc0255df3484f749d600c69a0f478c3",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jess King",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/ecb8be757bc54a3cb2570cbc0f40d61e",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Steven Little",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/510ff92ac0454363888bb016bf0fae73",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/77a7b6a94a2b46b88745626d86776256",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Gideon Akande",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/66edd92f9b464138bd258bab2673d8cd",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Andy Speer",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/4b2c5ff8e66b40bd945ca59ca3f24471",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Selena Samuela",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/6cf89eb772c84b1eb4376f7d7b5ae4d1",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Oliver Lee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/9ea489c8e6a7436092f87030afd40eb4",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Raul Vasquez",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/36f75e83a02d4a208b67a54691f778f0",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Andy Speer",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/aa31a96fc9f749f5970f380601254212",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Andy Speer",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/0078742c6ebd4cbc93f78dbc74fbb111",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Melissa Gurule",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b480fcbdafe34875add156c5317531a1",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Liz Cuttica",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/85022728cf9f4e3dad93d91da58f5b44",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Denis Morton",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/d9339781ec4c459ca34e368aeee3d56f",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Steven Little",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/dafa7e0ff7ad4876bfb343e304500f7a",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Katie Sido",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/902c48e85287428b93f5dffe756ce4ee",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Christian Vande Velde",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/38c12a7947c2486793a04b1094b8fbf5",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Antonia DeSantis",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/3f1b0058d47c4ac1897dc50315c85927",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Ted King",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/10b4dffb53164fa897c0f670d62ad319",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jeanine Peters",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/aec991f5ac3c42a5806a2d146cb1852e",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Nicole Meline",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/a3c18111f509431d8751e5eecd424b5f",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Steven Little",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/fd6cbdfcd1e8422d872a370bab6589cb",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Lisa Niren",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/fa84da5271664316a6fcf30f3e247757",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Marion Berrian Roaman",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/75d8c6d4257348f8be3ff5ac15d90c0f",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Alex Howes",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/4066ac7b0a9845908068bf0afab12d77",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jennifer Jacobs",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/cdbabe406e0e4270b1149a01b53683a6",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Matty Maggiacomo",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/f0257f70b3e24f0c93e7d7dec658bc30",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Olivia Amato",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/0e01d27b8266439285a3f1d9d39f815c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Olivia Amato",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/e044e3062268421b9427b80b877aed46",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Rebecca Kennedy",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/bc5d4bc5aa10431caeac6b315dfff54c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Matty Maggiacomo",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/20f4116798764dd2bbf890fec7a5356a",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Matty Maggiacomo",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/0966a0749748497984ac1a0e5abe1823",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Olivia Amato",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/5dff7903e589430b92e5a942a9bdb9d2",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Selena Samuela",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/495be166d961444e84702d96ee31e7e4",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Tom Danielson",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/0f7bd37dc3324401b0d399575962a389",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Kim Fischer",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/dcce5afc763e405093ea8317cec9a8f8",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "George Hincapie",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/44b77f0d857f486ea79ef241c0ea763c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jennifer Jacobs",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/c9dd7dcf434d44d187357ff220cd506a",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Emma Lovewell",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/d147b53e90f54340a73e0e556bc19671",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jill Karrenbrock",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/49095bf078ca4301b82d9de7b531bf9c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Sayre Masters",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/cf3a9c827d9249ed9d320b98da880839",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Samantha Mostaccio",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b05e2f9dd91e49f491299551118720ef",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Ally Love",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/6a4b37fbec3046a8b723fbcbcd4afafa",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Christine D'Ercole",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/42c93019716f4774bce70d583a8fb333",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Cody Rigsby",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/5d02208935d844f3a2ceecf29fe65d34",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Matt Wilpers",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/d738d26aa9d048dea993c51f21dea618",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jennifer Jacobs",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/aa4154c9791b40198e718173a38aa7d1",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Denis Morton",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/75e2ec5c49a34b70b2bc6c9fca32022c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Moses Daniel",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/f7aabf2849004fad86e12674c3b4fd00",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Ally Love",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/619d5da0ce0340efab0782efaabbd04c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Christine D'Ercole",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/219e6ac9f2b84fc092a4f471b4a9c280",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Matt Wilpers",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8f38075cd6c747c0a0b1d99c18178dca",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Emma Lovewell",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/6e1cbf7d60094276a9f040b90ec74b30",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jenn Sherman",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/c4806cee7b4b4040b1f3031b083001a1",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Ally Love",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/e077e589aef54304a5a2edc806566cee",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Cody Rigsby",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/979308c5b6d34537a517f639e73e671f",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Emma Lovewell",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/ff5abad997f8464c8122f4191a433246",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Rebecca Kennedy",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/fc8e62481d804316a5342a84f7f2a91c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Rebecca Kennedy",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b34de3a96a0b4f4eabf7cb243f157329",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Selena Samuela",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/ae1b787cd8d54d9b830580318c3c4768",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jenn Sherman",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/74963a6a161342e7bc71feafed2b5320",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jenn Sherman",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/3c2d7098cbb74f528f5eeb2d2a1bc9e8",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Alex Toussaint",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/61c5217507cc4f7b8f970a837e73b8b5",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jess King",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/408c5b796c034a76a43cd5b84ada54e6",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Christine D'Ercole",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/5f7b57ed45c941e6b29131d2a00613bf",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Cody Rigsby",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/69de2a9daa5b496ead91108b68c29a4b",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Matt Wilpers",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/6cd400456be143fb85d4cec125b5055c",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Hannah Marie Corbin",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/0c98d6524ecc418f9b878ff20a680f16",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Alex Toussaint",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/3e33aa033d77480d8b475ba43768b1a7",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Alex Toussaint",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/e9da564edec3469494ffc6a974657b14",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Oliver Lee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/d16aa750474f4855be40d127336ff55b",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Oliver Lee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/da62894a50834854b9ab01529526ba1d",
        platforms: ['bike-tread', 'ios']
      }
    ]
    let life_style_image_url = []
    let instructor_hero_image_url = []
    let email_share_image = [
      {
        name: "Colleen Saidman Yee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/fd5b5ea3ee2f4c5a8324fe9afd94d333",
        platforms: ['email']
      },
      {
        name: "George Hincapie",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8257d6ac65ad4ee1b496c83e924b15ed",
        platforms: ['email']
      },
      {
        name: "Christian Vande Velde",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/e4408b6236a2445eb7ef8f95c8f62725",
        platforms: ['email']
      },
      {
        name: "Steven Little",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/a44819d891a74b3bba922af3fce15bb2",
        platforms: ['email']
      },
      {
        name: "Matt Wilpers",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/2a7e34ecb2bb421ab82f1b99cd056aca",
        platforms: ['email']
      },
      {
        name: "Matty Maggiacomo",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/f2f86c87af924d84b8ad688646fcb6b2",
        platforms: ['email']
      },
      {
        name: "Oliver Lee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/941f6ee07efe4625b9dc1e5afd42d855",
        platforms: ['email']
      },
      {
        name: "Chase Tucker",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/de5c9b21f5f340afbd02c531af5685b4",
        platforms: ['email']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/f0457ee295ad4347ae84331dfcb0c7a2",
        platforms: ['email']
      },
      {
        name: "Selena Samuela",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/74f496f6d5e142d6aae42fe8b742f90e",
        platforms: ['email']
      },
      {
        name: "Alex Toussaint",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b006c2065a6a4803b467f5f50c3aa4cc",
        platforms: ['email']
      },
      {
        name: "Ally Love",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b5167b215edb441dafdee6a409b7cb13",
        platforms: ['email']
      },
      {
        name: "Andy Speer",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/aed95d1942a14959adbcea9cb44bfdf9",
        platforms: ['email']
      },
      {
        name: "Christine D'Ercole",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/3a77f71359de4a7eac3cbd3d8a0221e0",
        platforms: ['email']
      },
      {
        name: "Cody Rigsby",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/1a10b7eb4f6c40c7a995a0acea23bb00",
        platforms: ['email']
      },
      {
        name: "Denis Morton",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b2982172ca624ad2a4affed0c205cc4e",
        platforms: ['email']
      },
      {
        name: "Emma Lovewell",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/62f8a23759b2417ab3c997528d4de9ae",
        platforms: ['email']
      },
      {
        name: "Hannah Marie Corbin",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8715bb53f07248c5b5767016ce4f3d6c",
        platforms: ['email']
      },
      {
        name: "Jennifer Jacobs",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/645076908f9647bab8a4a1dc34949bb0",
        platforms: ['email']
      },
      {
        name: "Jenn Sherman",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/235a3c3da28e4fed9e24091ac7487a5b",
        platforms: ['email']
      },
      {
        name: "Jess King",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/ed110522e88044049c4cda1ed9e2b297",
        platforms: ['email']
      },
      {
        name: "Olivia Amato",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/a3abaa6197d1450fa6169f112c71a3b6",
        platforms: ['email']
      },
      {
        name: "Rebecca Kennedy",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/19ecb32c3cd94bc482f84197a2a0657c",
        platforms: ['email']
      }
    ]

		const response = await app.$axios.$get('instructor')
		const instructors = response.data

		instructors.forEach((instructor) => {
			const instructor_name = instructor.name
			jumbotron_url_ios.push({ name: instructor_name, image: instructor.jumbotron_url_ios, platforms: ['bike-tread', 'ios'] })
			web_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.web_instructor_list_display_image_url, platforms: ['bike-tread', 'web'] })
			ios_instructor_list_display_image_url.push({ name: instructor_name, image: instructor.ios_instructor_list_display_image_url, platforms: ['ios'] })
			image_url.push({ name: instructor_name, image: instructor.image_url, platforms: ['bike-tread', 'ios', 'web'] })
			about_image_url.push({ name: instructor_name, image: instructor.about_image_url, platforms: ['web'] })
			life_style_image_url.push({ name: instructor_name, image: instructor.life_style_image_url, platforms: ['web'] })
			instructor_hero_image_url.push({ name: instructor_name, image: instructor.instructor_hero_image_url, platforms: ['web'] })
		})

		const imageTypes = [
			{
				name: 'Headshot',
				nameInCMS: 'Profile Image',
				description: 'Square format (auto-crops to circle in apps) with off white (#F5F7F9) background.',
				propertyName: 'image_url',
				width: '400',
				height: '400',
				format: 'JPG or PNG',		
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Bike and Tread - Class in Progress Modal',
						image: '/bike-tread/class_in_progress.png',
						platforms: ['bike-tread']
					},
					{
						location: 'Bike and Tread - Featured',
						image: '/bike-tread/featured.png',
						platforms: ['bike-tread']
          },
					{
						location: 'Bike and Tread - Profile Workout History',
						image: '/bike-tread/profile_workout_history.png',
						platforms: ['bike-tread']
          },          
					{
						location: 'Bike and Tread - On-demand Instructor Filter',
						image: '/bike-tread/on_demand_instructor_filter.png',
						platforms: ['bike-tread']
          },
					{
						location: 'Bike and Tread - Live Schedule',
						image: '/bike-tread/live_schedule.png',
						platforms: ['bike-tread']
          },          
					{
						location: 'Bike and Tread - Peloton Instructors',
						image: '/bike-tread/peloton_instructors_2.png',
						platforms: ['bike-tread']
          },
					{
						location: 'iOS - All Workouts',
						image: '/ios/all_workouts.png',
						platforms: ['ios']
          },          
					{
						location: 'iOS - Class Filter',
						image: '/ios/class_filter.png',
						platforms: ['ios']
          },
					{
						location: 'iOS - Outdoor Workout',
						image: '/ios/outdoor_workout.png',
						platforms: ['ios']
          },
					{
						location: 'iOS - Instructor Detail',
						image: '/ios/about_instructor.png',
						platforms: ['ios']
          },
					{
						location: 'Web - Workouts',
						image: '/web/workouts.png',
						platforms: ['web']
          },
					{
						location: 'Web - Workout Detail',
						image: '/web/workout_detail.png',
						platforms: ['web']
					},                    
					{
						location: 'Web - Live Schedule',
						image: '/web/live_schedule.png',
						platforms: ['web']
					},                                                                             
        ],
				assets: image_url
			},      
			{
				name: "Facebook Share",
				nameInCMS: 'Workout Base Images',
				description: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',				
				propertyName: '',
				width: '1200',
				height: '630',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Bike and Tread - Facebook share',
						image: '/bike-tread/facebook_share.png',
						platforms: ['bike-tread']
					},
					{
						location: 'Web - Facebook share',
						image: '/web/facebook_share.png',
						platforms: ['web']
					}				
				],
				assets: workout_base_images
			},
			{
				name: "Cover Image",
				nameInCMS: 'Cover Image (iOS)',
				description: 'B&W image on white background, left side should leave room for text.',				
				propertyName: 'jumbotron_url_ios',
				width: '1536',
				height: '900',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Bike and Tread - Instructor Detail',
						image: '/bike-tread/about_instructor.png',
						platforms: ['bike-tread']
          },
					{
						location: 'iOS - Featured',
						image: '/ios/featured_1.png',
						platforms: ['ios']
          },
					{
						location: 'iOS - Live Class Detail',
						image: '/ios/live_class_detail.png',
						platforms: ['ios']
					}                            
        ],
				assets: jumbotron_url_ios
			},
			{
				name: "Instructor List",
				nameInCMS: 'Instructor List Display (Web)',
				description: 'Silo’ed ⅓ crop of instructor on off white (#F5F7F9) background. Right side should leave room for instructor name.',
				propertyName: 'web_instructor_list_display_image_url',
				width: '1040',
				height: '508',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Bike and Tread - Peloton Instructors',
						image: '/bike-tread/peloton_instructors_1.png',
						platforms: ['bike-tread']
          },
          {
						location: 'Web - Peloton Instructors',
						image: '/web/peloton_instructors.png',
						platforms: ['web']
					}                
        ],
				assets: web_instructor_list_display_image_url
      },
			{
				name: "Instructor List - iOS",
				nameInCMS: 'Instructor List Display (iOS)',
				description: '',	
				propertyName: 'ios_instructor_list_display_image_url',
				width: '1524',
				height: '508',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'iOS - Peloton Instructors',
						image: '/ios/peloton_instructors.png',
						platforms: ['ios']
          }                    
        ],
				assets: ios_instructor_list_display_image_url
			},
			{
				name: "About",
				nameInCMS: 'About Image',
				description: '¾ body silo with white background.',	
				propertyName: 'about_image_url',
				width: '600',
				height: '786',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Web - Instructor Questionnaire on Instructor Detail Page',
						image: '/web/about_instructor_questionnaire.png',
						platforms: ['web']
          }                    
        ],
				assets: about_image_url
			},
			{
				name: "Lifestyle",
				nameInCMS: 'Life Style Image',
				description: 'Lifestyle moment imagery.',
				propertyName: 'life_style_image_url',
				width: '3500',
				height: '2050',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Web - Instructor Quote on Instructor Detail Page',
						image: '/web/about_instructor_quote.png',
						platforms: ['web']
          }                    
        ],
				assets: life_style_image_url
			}, 
			{
				name: "Hero",
				nameInCMS: 'Instructor Hero Image',
				description: 'Full body on hardware.',
				propertyName: 'instructor_hero_image_url',
				width: '1020',
				height: '1240',
				format: 'Transparent PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Web - Instructor Detail Page',
						image: '/web/about_instructor.png',
						platforms: ['web']
          }                    
        ],
				assets: instructor_hero_image_url
			},             
			{
				name: "Headshot (Email)",
				nameInCMS: 'Email Share Image',
				description: 'Headshot image with top of head pop out.',
				propertyName: '',
				width: '390',
				height: '444',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Email - Month in Review',
						image: '/email/month_in_review.png',
						platforms: ['email']
          }
        ],
				assets: email_share_image
			},
		]

		return {
			imageTypes,
		}
	},
	components: {
		assets
	}
}
</script>
