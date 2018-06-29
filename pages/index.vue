<template>
  <div>
    <navbar :platforms="platforms" />
    <div class="main-wrapper">
      <div class="container">
        <div class="columns">
          <div class="column is-4-tablet is-3-desktop is-one-fifth is-hidden-mobile sidebar-column">
            <sideNav :assetTypes="assetTypes" :platforms="platforms" />
          </div>
          <div class="column is-8-tablet is-9-desktop is-four-fifths assets-column">
            <assets :assetTypes="assetTypes" :platforms="platforms" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import sideNav from '@/components/sideNav'
import assets from '@/components/assets'

export default {
	async asyncData({ app }) {

		let jumbotron_url_ios = []
		let web_instructor_list_display_image_url = []
		let ios_instructor_list_display_image_url = []
		let image_url = []
    let about_image_url = []
    let fb_share_cycling = [
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8e1c630004df401684c662e7dc6ab7d0",
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
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/77a7b6a94a2b46b88745626d86776256",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Denis Morton",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/d9339781ec4c459ca34e368aeee3d56f",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Christian Vande Velde",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/38c12a7947c2486793a04b1094b8fbf5",
        platforms: ['bike-tread', 'ios']
      },
      {
        name: "Jennifer Jacobs",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/cdbabe406e0e4270b1149a01b53683a6",
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
      }
    ]
    let fb_share_running = [
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/9d7a63af4ce24535b779d56431759dc7",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Chase Tucker",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/9a391786d1bd4c1f8a693c635ae9c918",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Andy Speer",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/4b2c5ff8e66b40bd945ca59ca3f24471",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Oliver Lee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/9ea489c8e6a7436092f87030afd40eb4",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Matty Maggiacomo",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/f0257f70b3e24f0c93e7d7dec658bc30",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Rebecca Kennedy",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/bc5d4bc5aa10431caeac6b315dfff54c",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Olivia Amato",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/5dff7903e589430b92e5a942a9bdb9d2",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Selena Samuela",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/495be166d961444e84702d96ee31e7e4",
        platforms: ['bike-tread, ios']
      }
    ]
    let fb_share_bootcamp = [
      {
        name: "Chase Tucker",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b6361e9e112644f4b2e11cdd596dc0ce",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/8697e0abee5a485ca2d84cac1ecd0378",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Selena Samuela",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/6cf89eb772c84b1eb4376f7d7b5ae4d1",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Andy Speer",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/0078742c6ebd4cbc93f78dbc74fbb111",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Olivia Amato",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/e044e3062268421b9427b80b877aed46",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Matty Maggiacomo",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/0966a0749748497984ac1a0e5abe1823",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Rebecca Kennedy",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/b34de3a96a0b4f4eabf7cb243f157329",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Oliver Lee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/d16aa750474f4855be40d127336ff55b",
        platforms: ['bike-tread, ios']
      }
    ]
    let fb_share_floor = [
      {
        name: "Colleen Saidman Yee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/d9e608a0c7654afe95c8384281455095",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Robin Arzon",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/970c398ecfc246a48b164985c09f6f18",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Chase Tucker",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/aeeca686867446839b7a9ce2f0c2a8ae",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Andy Speer",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/aa31a96fc9f749f5970f380601254212",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Olivia Amato",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/0e01d27b8266439285a3f1d9d39f815c",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Matty Maggiacomo",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/20f4116798764dd2bbf890fec7a5356a",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Rebecca Kennedy",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/fc8e62481d804316a5342a84f7f2a91c",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Selena Samuela",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/ae1b787cd8d54d9b830580318c3c4768",
        platforms: ['bike-tread, ios']
      },
      {
        name: "Oliver Lee",
        image: "https://workout-metric-images-prod.s3.amazonaws.com/da62894a50834854b9ab01529526ba1d",
        platforms: ['bike-tread, ios']
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
    let outdoor = [
      {
        name: "30 min Beginner HIIT Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/9962947a7ad778192a385a0f231862367ad7c7cb/img_1528943682452.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "45 min Beg. Marathon Race Prep",
        image: "https://s3.amazonaws.com/peloton-ride-images/1efe114f6f378b52e2a539798388661f573ec6fc/img_1528903541525.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "45 min Marathon Race Prep",
        image: "https://s3.amazonaws.com/peloton-ride-images/aa8e7bc2509d876868dce1b0e159bb395a28d4b6/img_1528943415710.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "20 min HIIT Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/576542a267230d1e8183bd206efcf12a8a9adc6c/img_1528918354031.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min 5K Race Prep",
        image: "https://s3.amazonaws.com/peloton-ride-images/48b6dfc90f45540894fb8a087c82818324be41af/img_1528943465224.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "20 min Beginner Intervals Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/faa56257e3551e4f57e91dd9a80e40cc7f74e835/img_1528917960388.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "45 min Hip Hop Fun Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/3389365853c9ceb3b707934c1e2ac5d6f4533859/img_1528943925767.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "60 min Rock Fun Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/fe2486f018196566410f3fb3afd3f515807026d8/img_1528943278048.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "45 min 80s Fun Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/492447a3368902e3e21a47cb3ef9fd45e6438dd5/img_1528918280063.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min Walk + Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/74b1cb7d124bad8535a87a1943ca731b18f177dd/img_1528943808038.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "20 min Intervals Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/a9f9f309359bcc4e922f0022423a790bf13df06c/img_1528917991181.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min Beginner 5K Race Prep",
        image: "https://s3.amazonaws.com/peloton-ride-images/c0a46dd9ed79bdb3b55e9bb4934ad00d181f58ea/img_1528943883817.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min Pop Fun Run",
        image: "https://s3.amazonaws.com/peloton-ride-images/1630b2a7ace4e40e111a22e79fdc2892d7157996/img_1528903323557.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "20 min Pop Fun Walk",
        image: "https://s3.amazonaws.com/peloton-ride-images/54dde46be5ee4ae38fe778f1ce16ee9f48172e3c/img_1528918314036.jpg",
        platforms: ['bike-tread']
      },
      {
        name: "30 min Power Walking",
        image: "https://s3.amazonaws.com/peloton-ride-images/5e4a25db34a083330679a61388f0b6442f90aa23/img_1528943365959.jpg",
        platforms: ['bike-tread']
      }
    ]
    let categories = [
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/8a96055d5928467dab3cae3403f94190",
        name: "Cycling",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/2eaf057fdc74455fa491283439bffdf8",
        name: "Running",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/e5ab31b7f29c496dbedc4c96256f7654",
        name: "Bootcamp",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/89f79d6f58424035854e9dc0a8c79008",
        name: "Outdoor",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/498dbaa0cafd4fed94c4e193574a6539",
        name: "Stretching",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/63e7b61454cf476ea9ee1421595ff402",
        name: "Strength",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/836c45c76d45406698e37d1022e13ac5",
        name: "Yoga",
        platforms: ['ios']
      },
      {
        image: "https://browse-categories-images-prod.s3.amazonaws.com/207965f33f114c669ad9161bd7c891eb",
        name: "Cardio",
        platforms: ['ios']
      }
    ]
    let commercial_splash = [
      {
        image: 'https://raw.githubusercontent.com/pelotoncycle/android/master/home/src/main/res/drawable-hdpi/commercial_login_image_alex.jpg?token=AETev3CZSEtEa9mxW8vE3XsQS2aSOfw2ks5bP3vAwA%3D%3D',
        name: 'Commercial - Alex',
        platforms: ['bike-tread']
      },
      {
        image: 'https://raw.githubusercontent.com/pelotoncycle/android/master/home/src/main/res/drawable-hdpi/commercial_login_image_ally.jpg?token=AETev9l8Zu7upmpuqXw1y6BlszEPVduCks5bP3vUwA%3D%3D',
        name: 'Commercial - Ally',
        platforms: ['bike-tread']
      },
      {
        image: 'https://raw.githubusercontent.com/pelotoncycle/android/master/home/src/main/res/drawable-hdpi/commercial_login_image_cody.jpg?token=AETev0YKaI5BN9nYKBLDtL_luQd__rjqks5bP3vewA%3D%3D',
        name: 'Commercial - Cody',
        platforms: ['bike-tread']
      },
      {
        image: 'https://raw.githubusercontent.com/pelotoncycle/android/master/home/src/main/res/drawable-hdpi/commercial_login_image_dennis.jpg?token=AETevzg7A6pu5eTEGJa8VwiM6-NLBVMaks5bP3vswA%3D%3D',
        name: 'Commercial - Dennis',
        platforms: ['bike-tread']
      },
      {
        image: 'https://raw.githubusercontent.com/pelotoncycle/android/master/home/src/main/res/drawable-hdpi/commercial_login_image_hannah.jpg?token=AETev_0pMI8C7jVvglkEs2S9Gv2Nztwdks5bP3v0wA%3D%3D',
        name: 'Commercial - Hannah',
        platforms: ['bike-tread']
      },
      {
        image: 'https://raw.githubusercontent.com/pelotoncycle/android/master/home/src/main/res/drawable-hdpi/commercial_login_image_matt.jpg?token=AETev6_He-giLADGC-DXW9nK0CpnWsmDks5bP3v9wA%3D%3D',
        name: 'Commercial - Matt',
        platforms: ['bike-tread']
      },
      {
        image: 'https://raw.githubusercontent.com/pelotoncycle/android/master/home/src/main/res/drawable-hdpi/commercial_login_image_robin.jpg?token=AETev6tvblxbJS0HgFTwRPvyotEKSTo5ks5bP3wGwA%3D%3D',
        name: 'Commercial - Robin',
        platforms: ['bike-tread']
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

		const assetTypes = [
			{
				name: 'Headshot',
				nameInCMS: 'Profile Image',
				description: 'Primary photo for instructors throughout the platform, including on the studio bike / tread app.',
        type: 'image',
        linkId: 'headshot',
				propertyName: 'image_url',
        designDescription: 'Square format (auto-crops to circle in apps) with Off-White (#F5F7F9) background.',
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
						location: 'Bike and Tread - Count Me In Modal',
						image: '/bike-tread/count_me_in_modal.png',
						platforms: ['bike-tread']
          },                    
					{
						location: 'Bike and Tread - Class Start Modal',
						image: '/bike-tread/class_start_modal.png',
						platforms: ['bike-tread']
          },                    
					{
						location: 'Bike and Tread - Class Resume Modal',
						image: '/bike-tread/class_resume_modal.png',
						platforms: ['bike-tread']
          },                    
					{
						location: 'Bike and Tread - Post Class Rating Modal',
						image: '/bike-tread/post_class_rating_modal.png',
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
				name: "Headshot (Email)",
				nameInCMS: 'Email Share Image',
				description: 'Instructor photo in the Month in Review emails.',
        type: 'image',
        linkId: 'headshot-email',
				propertyName: '',
        designDescription: 'Headshot image with top of head pop out.',
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
			{
				name: "Instructor List",
				nameInCMS: 'Instructor List Display (Web)',
				description: 'Instructor photo on Bike / Tread and Web instructor list.',
        type: 'image',
        linkId: 'instructor-list',
				propertyName: 'web_instructor_list_display_image_url',
        designDescription: 'Silo’ed ⅓ crop of instructor on Off-White (#F5F7F9) background. Right side should leave room for instructor name.',
				width: '1040',
				height: '508',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
        guestInstructorNotes: 'Silo’ed head and shoulders crop of instructor on Off-White (#F5F7F9) background. Right side should leave room for instructor name. 920 x 240.',
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
				description: 'Instructor photo on iOS instructor list.',	
        type: 'image',
        linkId: 'instructor-list-ios',
				propertyName: 'ios_instructor_list_display_image_url',
        designDescription: 'Silo’ed ⅓ crop of instructor on White background. Right side should leave room for instructor name.',
				width: '1524',
				height: '508',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
        guestInstructorNotes: 'Silo’ed head and shoulders crop of instructor on Off-White (#F5F7F9) background. Right side should leave room for instructor name. 1524 x 508.',
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
				name: "Cover Image",
				nameInCMS: 'Cover Image (iOS)',
				description: 'Cover image on iOS Featured and Live Class Details screens, as well as the Bike / Tread Instructor Detail screen.',				
        type: 'image',
        linkId: 'cover-image',
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
				name: "Hero",
				nameInCMS: 'Instructor Hero Image',
				description: 'Hero image on the Instructor Detail screen on web.',
        type: 'image',
        linkId: 'hero',
				propertyName: 'instructor_hero_image_url',
        designDescription: 'Full body on hardware.',
				width: '1020',
				height: '1240',
				format: 'Transparent PNG',
				maxFileSize: '500 kb',
        guestInstructorNotes: 'Headshot. 960 x 960.',
				usage: [
          {
						location: 'Web - Instructor Detail Screen',
						image: '/web/about_instructor.png',
						platforms: ['web']
          }                    
        ],
				assets: instructor_hero_image_url
			},          
			{
				name: "About",
				nameInCMS: 'About Image',
				description: 'Image in the questionnaire section of the Instructor Detail screen on web',	
        type: 'image',
        linkId: 'about',
				propertyName: 'about_image_url',
        designDescription: '¾ body silo with white background.',
				width: '600',
				height: '786',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Web - Instructor Questionnaire on Instructor Detail Screen',
						image: '/web/about_instructor_questionnaire.png',
						platforms: ['web']
          }                    
        ],
				assets: about_image_url
			},
			{
				name: "Lifestyle",
				nameInCMS: 'Life Style Image',
				description: 'Quote background on the Instructor Detail screen',
        type: 'image',
        linkId: 'lifestyle',
				propertyName: 'life_style_image_url',
        designDescription: 'Lifestyle moment imagery.',
				width: '3500',
				height: '2050',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
          {
						location: 'Web - Instructor Quote on Instructor Detail Screen',
						image: '/web/about_instructor_quote.png',
						platforms: ['web']
          }                    
        ],
				assets: life_style_image_url
			},
			{
				name: "Facebook Share (Cycling)",
				nameInCMS: 'Workout Base Images',
				description: 'Background image on metrics shared to Facebook.',				
        type: 'image',
        linkId: 'fb-share-cycling',
				propertyName: '',
        designDescription: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',
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
				assets: fb_share_cycling
			},
			{
				name: "Facebook Share (Running)",
				nameInCMS: 'Workout Base Images',
				description: 'Background image on metrics shared to Facebook.',				
        type: 'image',
        linkId: 'fb-share-running',
				propertyName: '',
        designDescription: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',        
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
				assets: fb_share_running
			},
			{
				name: "Facebook Share (Bootcamp)",
				nameInCMS: 'Workout Base Images',
				description: 'Background image on metrics shared to Facebook.',				
        type: 'image',
        linkId: 'fb-share-bootcamp',
				propertyName: '',
        designDescription: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',
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
				assets: fb_share_bootcamp
			},
			{
				name: "Facebook Share (Floor)",
				nameInCMS: 'Workout Base Images',
				description: 'Background image on metrics shared to Facebook.',				
        type: 'image',
        linkId: 'fb-share-floor',
				propertyName: '',
        designDescription: 'B&W image on black background depicting corresponding discipline. Left side should leave room for metrics overlay. Right side should be branded with logomark. CMS can accept multiple images.',        
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
				assets: fb_share_floor
			},                  
			{
				name: "Outdoor Run Thumbnail",
				nameInCMS: 'This asset is not editable in CMS',
        description: 'Background for outdoor run workouts throughout the iOS app.',
        type: 'image',
        linkId: 'outdoor-run',
        designDescription: 'Outdoor lifestyle image.',
				width: '1920',
				height: '1080',
				format: 'JPG or PNG',        			
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'iOS - Classes Outdoor',
            image: '/ios/classes_outdoor.png',
            platforms: ['ios']
          },
					{
						location: 'iOS - Featured Outdoor Running',
            image: '/ios/featured_2.png',
            platforms: ['ios']
          },
					{
						location: 'iOS - Outdoor Class Detail',
            image: '/ios/outdoor_class_detail.png',
            platforms: ['ios']
          },
					{
						location: 'iOS - Outdoor Workout',
            image: '/ios/outdoor_workout.png',
            platforms: ['ios']
					}                                                                                      
        ],
				assets: outdoor
      },
			{
				name: "Browse Category",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Image used for iOS class category cards.',                
        type: 'image',
        linkId: 'browse-category',
				designDescription: 'Black room studio color image. Left side should leave room browse category.',
				width: '975',
				height: '540',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'iOS - Classes',
            image: '/ios/classes.png',
            platforms: ['ios']
					}                                                                            
        ],
				assets: categories
      },
			{
				name: "Just Ride",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background for Just Ride option on the bike\'s More tab.',				
        type: 'image',
        linkId: 'just-ride',
				width: '380',
				height: '640',
				format: 'JPG or PNG',
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Bike - More',
						image: '/bike-tread/more_bike.png',
						platforms: ['bike-tread']
					}                                                                            
        ],
				assets: [{
          name: 'Just Ride background',
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/79da932f4dd481d7d52da3116861ada864a13975/ui/src/main/res/drawable-hdpi/freestyle_ride_bg.png?token=AETev9-v2LOaCZF02Rt5n-U5Zqzvi1EYks5bOsKowA%3D%3D',
					platforms: ['bike-tread']
        }]
      },
			{
				name: "Just Run",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background for Just Run on the tread\'s More tab.',								
        type: 'image',
        linkId: 'just-run',
				width: '342',
				height: '576',
				format: 'JPG or PNG',								
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Tread - More',
						image: '/bike-tread/more_tread.png',
						platforms: ['bike-tread']
					}                                                                            
        ],
				assets: [{
          name: 'Just Run background',
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/b64bfb43a44d9a58be8b33c3e31fc5effca2fd57/ui/src/main/res/drawable-hdpi/freestyle_bg.png?token=AETev3KA08QJU_NiEkA263L-Chpzz3OPks5bOsKIwA%3D%3D',
					platforms: ['bike-tread']
        }]
      },
			{
				name: "Scenic Ride / Run",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background for Scenic Ride option on bike and tread More tab.',								
        type: 'image',
        linkId: 'scenic',
				width: '320',
				height: '520',
				format: 'JPG or PNG',				
				maxFileSize: '500 kb',
				usage: [
					{
						location: 'Bike - More',
						image: '/bike-tread/more_bike.png',
						platforms: ['bike-tread']
          },
					{
						location: 'Tread - More',
						image: '/bike-tread/more_tread.png',
						platforms: ['bike-tread']
					}                                                               
        ],
				assets: [{
          name: 'Scenic Ride / Run background',
					image: 'https://raw.githubusercontent.com/pelotoncycle/android/7f6c8dcbf998b2275709e1fc80df9a057b70c9c3/ui/src/main/res/drawable-hdpi/scenic_bg.png?token=AETev3hjwg9QRACoQZTJQ1IWVJYLBusyks5bOsJswA%3D%3D',
					platforms: ['bike-tread']
        }]
      },
			{
				name: "iOS Splash",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background video seen when you first open the iOS app.',						
        type: 'video',
        linkId: 'ios-splash',
				width: '1024',
				height: '768',
				format: 'mp4',
				maxFileSize: 'Unknown',
				usage: [
					{
						location: 'iOS - Splash Screen',
						image: '/ios/splash.png',
						platforms: ['ios']
					}                                                                        
        ],
				assets: [
					{
						name: 'iOS Splash Video',
						video: '/ios_splash.mp4',
						platforms: ['ios']
					}
				]
      },
			{
				name: "Commercial Splash",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Background image on the splash screen for the commercial bike.',						
        type: 'image',
        linkId: 'commercial-splash',
				width: '1920',
				height: '1080',
				format: 'JPG or PNG',						
				maxFileSize: '',
				usage: [
					{
						location: 'Commercial Bike - Splash Screen',
						image: '/bike-tread/commercial_splash.png',
						platforms: ['bike-tread']
					}                                                                        
        ],
				assets: commercial_splash
      },
			{
				name: "Commercial Video",
				nameInCMS: 'This asset is not editable in CMS',
				description: 'Video users can open from the commercial bike splash screen.',						
        type: 'video',
        linkId: 'commercial-video',
				width: '960',
				height: '540',
				format: 'JPG or PNG',						
				maxFileSize: '',
				usage: [
					{
						location: 'Commercial Bike - Video Linked From Splash Screen',
						image: '/bike-tread/commercial_video.png',
						platforms: ['bike-tread']
					}                                                                        
        ],
				assets: [
					{
						name: 'Commercial Splash Video',
						video: '/commercial_splash.mp4',
						platforms: ['bike-tread']
					}
				]
      }                 
		]

		return {
      assetTypes,
      platforms: 'all'
		}
	},
	components: {
    navbar,
		sideNav,
    assets
	}
}
</script>

<style lang="scss" scoped>
  .container, .columns {
    height: 100%;
  }
</style>
