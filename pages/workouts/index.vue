<template>
	<div>
		<section class="section" v-for="imageType in imageTypes" :key="imageType.propertyName">
			<div class="container">
        <div class="select is-rounded is-pulled-right">
					<select v-model="platforms">
						<option value="all">All Platforms</option>
						<option value="bike/tread">Bike / Tread</option>
						<option value="iOS">iOS</option>
						<option value="web">Web</option>
					</select>
				</div>
        <div class="section-heading">
          <h2 class="is-size-3">{{ imageType.name }}</h2>
          <p>Dimensions {{ `${imageType.width} x ${imageType.height}` }}</p>
          <p>Max File Size: {{ imageType.maxFileSize }}</p>
        </div>
				<div class="usage">
          <h3 class="is-size-4">Usage</h3>
          <div class="columns is-multiline">
            <div class="column is-4" v-for="asset in imageType.usage" :key="asset.location">
              <img :src="getImage(asset.image)"
                :alt="asset.location"
                class="image-asset">
              <p class="is-size-7">{{ asset.location }}</p>
            </div>
          </div>				
        </div>
        <div class="assets">
          <h3 class="is-size-4">Assets</h3>
          <div class="columns is-multiline">
            <div class="column is-one-fifth" v-for="asset in imageType.assets" :key="asset.title">
              <img :src="asset.image"
                :alt="imageType.name"
                class="image-asset">
              <p class="is-size-7">{{ asset.title }}</p>
            </div>
          </div>
        </div>
			</div>
		</section>		
	</div>
</template>

<script>
export default {
	async asyncData({ app }) {

    let scenicRides = [
      {
        "title": "30 min Canadian National Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485385859682.jpg"
      },
      {
        "title": "15 min San Francisco Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/16b6a424db10405d9e1df44af0eb10407a323c8d/img_1527279505460.jpg"
      },
      {
        "title": "30 min Sydney Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1524845511375.jpg"
      },
      {
        "title": "30 min British Columbia Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/3efcb616d89a2c11fceb412e65d25f9e5d1a77a9/img_1395068587183.jpg"
      },
      {
        "title": "20 min Northern California Coast Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1497875773780.jpg"
      },
      {
        "title": "15 min British Columbia Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1524845750082.jpg"
      },
      {
        "title": "20 min Tahoe Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482863535574.jpg"
      },
      {
        "title": "45 min Bay Area Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501357522650.jpg"
      },
      {
        "title": "15 min Porteños Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1524845400757.jpg"
      },
      {
        "title": "15 min Canadian Mountains Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477603081919.jpg"
      },
      {
        "title": "15 min New Zealand Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522349302238.jpg"
      },
      {
        "title": "20 min Cinque Terre Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493152180671.jpg"
      },
      {
        "title": "30 min Oregon Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1503940972158.jpg"
      },
      {
        "title": "15 min Paris Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513705888806.jpg"
      },
      {
        "title": "55 min British Columbia Coast Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/93084fdf02ad2b05ae33741e783a5d9cd3cd350a/img_1407869622639.jpg"
      },
      {
        "title": "10 min Taiwan Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/9e34055c00edcde7441aa75f73594e94046d5691/img_1517349042954.jpg"
      },
      {
        "title": "30 min Oregon Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513706822025.jpg"
      },
      {
        "title": "35 min Mount Washington Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/7132a279bf7793e0882d5921664c1fb3c3c4965b/img_1395409081284.jpg"
      },
      {
        "title": "15 min Shasta-Trinity Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/92e2b4fd456d0ef904646509bbcef420f24fdbf8/img_1517349178242.jpg"
      },
      {
        "title": "30 min Costa Rica Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1462997909035.jpg"
      },
      {
        "title": "60 min Hana Highway Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/d32927b55bd675a756f6170ee51375d5dfe70fa0/img_1467237479727.jpg"
      },
      {
        "title": "60 min New Zealand National Parks Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490629565599.jpg"
      },
      {
        "title": "30 min Taroko Gorge Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1462997634712.jpg"
      },
      {
        "title": "10 min Canadian National Parks Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511788912952.jpg"
      },
      {
        "title": "10 min Saxony Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493149607337.jpg"
      },
      {
        "title": "35 min Northern Italy Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/8bc26fb25641f326485467ac99ccdaa93dd1ce4e/img_1411950363641.jpg"
      },
      {
        "title": "55 min Acadia Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/72c5e6d5313b5e709b4290ed10be8f4950fdd71e/img_1395408204198.jpg"
      },
      {
        "title": "20 min Chilean Mountains Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477602708962.jpg"
      },
      {
        "title": "35 min New Zealand Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/249c7978fcbbac0d065dc2c24157fd5182fe5212/img_1411949543913.jpg"
      },
      {
        "title": "30 min California Trails Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511788701151.jpg"
      },
      {
        "title": "45 min Mt. Rainier Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/9482f03c76a668084b5e5bef7795724da191e857/img_1467237514754.jpg"
      },
      {
        "title": "30 min Burgundy and Centre Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/451e95594d34d1a5275eb2801c5d00d973ae02df/img_1469820472366.jpg"
      },
      {
        "title": "20 min Countryside Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/1cbde1638bd16c7a97a18fbef783cf31e6c4113c/img_1508980244768.jpg"
      },
      {
        "title": "30 min Glaciers of Argentina Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/f6d7664f0b98750185abbd2c454fb2c940956867/img_1469820442484.jpg"
      },
      {
        "title": "15 min Hawaii Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511789007693.jpg"
      },
      {
        "title": "20 min Zion National Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/65f3641abfa4e30316ade64de521678ef35d21d7/img_1497992001251.jpg"
      },
      {
        "title": "15 min Grand Teton National Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482863878736.jpg"
      },
      {
        "title": "10 min Buenos Aires Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513705654665.jpg"
      },
      {
        "title": "20 min US National Parks Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/408e8b627066c94e7967916a46015a7120d529c1/img_1517348994006.jpg"
      },
      {
        "title": "15 min Kaibab Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493151788171.jpg"
      },
      {
        "title": "20 min Bavaria Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501358773296.jpg"
      },
      {
        "title": "30 min Pyrenees Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/7cfbc5e1b2ca1fe4c21fe4650b00f3a1f14539e9/img_1467237585112.jpg"
      },
      {
        "title": "30 min Death Valley Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1503941122097.jpg"
      },
      {
        "title": "20 min Escalante Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495535712322.jpg"
      },
      {
        "title": "30 min Puna Coast Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/1cc442d5e9da8c29f7cb784c6508721717952544/img_1472504195349.jpg"
      },
      {
        "title": "20 min Central America Scenic Ride Part 1",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511788826385.jpg"
      },
      {
        "title": "20 min Acadia National Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480523592313.jpg"
      },
      {
        "title": "20 min Bryce Canyon National Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490630535453.jpg"
      },
      {
        "title": "60 min Deserts and Dirt Roads Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480523984264.jpg"
      },
      {
        "title": "15 min Qingshui Cliff Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487871510166.jpg"
      },
      {
        "title": "20 min Panama Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482863263938.jpg"
      },
      {
        "title": "30 min Ariege Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/e24a41c939057a33c7ac9d03c92217c685ef06a3/img_1475172477034.jpg"
      },
      {
        "title": "20 min Central America Scenic Ride Part 2",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513706510231.jpg"
      },
      {
        "title": "10 min Arid Air Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/3c17475c8958c406eb5bc4446d1732d1ca6a70e3/img_1508980184620.jpg"
      },
      {
        "title": "15 min All Roads Lead Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/eed0911d937ccd574b25da46f08b3a49085a1e9c/img_1508980219915.jpg"
      },
      {
        "title": "30 min Canyons Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487870296252.jpg"
      },
      {
        "title": "10 min Patagonia Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/dc8f511a385626610a64dfb3c54a295c74aa2aff/img_1524845852200.jpg"
      },
      {
        "title": "55 min Banff National Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/57c8b7c99383d819a68958a7fb93fb1c6430e6fc/img_1407869037349.jpg"
      },
      {
        "title": "15 min US Roads Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/4eeebf32fc195f2452d146e72bfa0b484b55e9b3/img_1519764262230.jpg"
      },
      {
        "title": "45 min Latin Cities Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493152844219.jpg"
      },
      {
        "title": "15 min Humboldt County Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480453790119.jpg"
      },
      {
        "title": "15 min Southern California Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501358884268.jpg"
      },
      {
        "title": "20 min Morzine Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495544854179.jpg"
      },
      {
        "title": "10 min Mt. Washington State Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490630674859.jpg"
      },
      {
        "title": "30 min Trento Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490630344430.jpg"
      },
      {
        "title": "10 min California Dreaming Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1519764409312.jpg"
      },
      {
        "title": "20 min Bocas del Toro Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495532634539.jpg"
      },
      {
        "title": "30 min New Taipei City Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1475173092507.jpg"
      },
      {
        "title": "15 min South Dakota Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/8759952f006b41a1973c9dc0ca285b584b97a0f4/img_1517349092237.jpg"
      },
      {
        "title": "15 min Kootenay Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501355679252.jpg"
      },
      {
        "title": "20 min Panama Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1524845652994.jpg"
      },
      {
        "title": "20 min Maine Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/223d15d30a915bd89026a18f4db886ec61a76bbe/img_1527279561172.jpg"
      },
      {
        "title": "20 min Summer in the City Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1503940708406.jpg"
      },
      {
        "title": "30 min Sunset Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485386067647.jpg"
      },
      {
        "title": "30 min Torres del Paine Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/3111475967fd9e115e622f3899bfc9fbe02a2fd3/img_1467237563649.jpg"
      },
      {
        "title": "30 min Haleakala Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/c33e09161e8f1a60b0c8f74fdb0911ad5c54d6dc/img_1469820409860.jpg"
      },
      {
        "title": "10 min Santiago Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501357418245.jpg"
      },
      {
        "title": "20 min New Zealand Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480523814808.jpg"
      },
      {
        "title": "15 min Beach Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1503940572378.jpg"
      },
      {
        "title": "10 min Mount Tamalpais Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495544206263.jpg"
      },
      {
        "title": "15 min Yoho National Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522348988842.jpg"
      },
      {
        "title": "60 min Volcanic Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495544334451.jpg"
      },
      {
        "title": "10 min Casco Bay Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1497877619929.jpg"
      },
      {
        "title": "30 min Mt. Diablo Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1462996524120.jpg"
      },
      {
        "title": "45 min Alajuela Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490630003798.jpg"
      },
      {
        "title": "30 min Dinosaur Provincial Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/cf59ebcf08b9d3b359846dd55b420e2420f34851/img_1394648372379.jpg"
      },
      {
        "title": "30 min Natural Peaks Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/da0a2df739f8d86da0177e47ad4f4e916cf9e21c/img_1508980277243.jpg"
      },
      {
        "title": "30 min Vermilion Cliffs Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493152735322.jpg"
      },
      {
        "title": "20 min Switzerland Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/6043491f244fb96892e83aec032ee477c8a9fcfe/img_1519764174375.jpg"
      },
      {
        "title": "30 min Salasc Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487868956071.jpg"
      },
      {
        "title": "10 min Washington Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/bac6ed8fcd5d5c91c3e7e7d5dcfac228a93e0987/img_1527279590958.jpg"
      },
      {
        "title": "45 min California National Parks Scenic Ride Part 2",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485385507958.jpg"
      },
      {
        "title": "30 min Land and Water Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/e41c412d42138591879391726e1cecd3b9e340d7/img_1508980023929.jpg"
      },
      {
        "title": "10 min Moki Dugway Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1497876038554.jpg"
      },
      {
        "title": "45 min California Coast Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/358887b9925bd7be6bdd629ab9941ea28a050b22/img_1472504153929.jpg"
      },
      {
        "title": "15 min Otago Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485387705346.jpg"
      },
      {
        "title": "60 min Sierra Nevada Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1497875543541.jpg"
      },
      {
        "title": "10 min Vancouver Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522349792032.jpg"
      },
      {
        "title": "30 min Alpes Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/031ce0e1ed1258505ba0565a66c3a52c7d0cdc65/img_1472504214388.jpg"
      },
      {
        "title": "10 min French Suburbs Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1519764499535.jpg"
      },
      {
        "title": "30 min French Forest Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1463001798721.jpg"
      },
      {
        "title": "60 min Oregon and Washington Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480453158119.jpg"
      },
      {
        "title": "30 min Normandy Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/e2956411fd972323544793629cdd3ece2d75c401/img_1472504185251.jpg"
      },
      {
        "title": "20 min Big Sur Scenic Ride ",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485387503015.jpg"
      },
      {
        "title": "10 min Inyo National Forest Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/a682a66d4086f890d9ff80ab486dbef85d885879/img_1506616990838.jpg"
      },
      {
        "title": "45 min Columbia River Gorge Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/66c1d55cb5f0a0b01eaaf397c8a463a2b8b9125f/img_1469820556880.jpg"
      },
      {
        "title": "45 min Champagne Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1475171933480.jpg"
      },
      {
        "title": "60 min California National Parks Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482862777818.jpg"
      },
      {
        "title": "60 min Cities By The Sea Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482862906772.jpg"
      },
      {
        "title": "30 min Maine Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1506616555008.jpg"
      },
      {
        "title": "15 min Italian Alps Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/d0686f5e8e26ae293656c227b8dda6bf33aab5dc/img_1506616869731.jpg"
      },
      {
        "title": "20 min South Dakota Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487871286416.jpg"
      },
      {
        "title": "30 min Italian Alps Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522348734650.jpg"
      },
      {
        "title": "10 min Smooth Riding Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511789076295.jpg"
      },
      {
        "title": "30 min Sun Moon Lake Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/5326562e4da9da8b3e5d4c0f0e303440aefa197e/img_1472504206237.jpg"
      },
      {
        "title": "60 min Italian Alps Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477602159893.jpg"
      },
      {
        "title": "20 min Cote D'Azur Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522349525501.jpg"
      },
      {
        "title": "20 min Joshua Tree Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/7358aa4f66e966726b48fb6c6102a2cdf87e2490/img_1506616719870.jpg"
      },
      {
        "title": "15 min Venice Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513705788289.jpg"
      },
      {
        "title": "10 min Glacier National Park Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487871689340.jpg"
      },
      {
        "title": "30 min Chile Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1506616511140.jpg"
      },
      {
        "title": "30 min Otztal Alps Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/46d469f1a1e17c5eb236189cb1fc6fddd19dfd4d/img_1527279682203.jpg"
      },
      {
        "title": "30 min Tropical Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/5d5e92198b5e1e3b0c233195243cd63f4f620575/img_1517349220128.jpg"
      },
      {
        "title": "45 min French Countryside Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1462996821723.jpg"
      },
      {
        "title": "10 min Hollywood Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/cdb91fad4f92b17c98be27068fb288f4361d8c8c/img_1527279478321.jpg"
      },
      {
        "title": "10 min Rugged Trails Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/15b74c39b38994e7b6478eb07a441d19055e1940/img_1503939306123.jpg"
      },
      {
        "title": "30 min Napa Valley Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/873e6c3cea9aeb5bb4d0e7fe24eedd9f4f92793c/img_1467237611038.jpg"
      },
      {
        "title": "30 min Tour de Paris Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1519763981134.jpg"
      },
      {
        "title": "60 min Bright Lights Big City Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477602411963.jpg"
      },
      {
        "title": "20 min Fall Colors Scenic Ride",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477602882278.jpg"
      }
    ]

    let scenicRuns = [
      {
        "title": "20 min Central America Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511788826385.jpg"
      },
      {
        "title": "10 min Glacier National Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487871689340.jpg"
      },
      {
        "title": "60 min Sierra Nevada Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1497875543541.jpg"
      },
      {
        "title": "20 min Chilean Mountains Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477602708962.jpg"
      },
      {
        "title": "20 min Fall Colors Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477602882278.jpg"
      },
      {
        "title": "20 min Panama Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482863263938.jpg"
      },
      {
        "title": "10 min Arid Air Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/3c17475c8958c406eb5bc4446d1732d1ca6a70e3/img_1508980184620.jpg"
      },
      {
        "title": "20 min New Zealand Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480523814808.jpg"
      },
      {
        "title": "10 min Saxony Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493149607337.jpg"
      },
      {
        "title": "15 min British Columbia Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1524845750082.jpg"
      },
      {
        "title": "60 min Hana Highway Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/d32927b55bd675a756f6170ee51375d5dfe70fa0/img_1467237479727.jpg"
      },
      {
        "title": "15 min All Roads Lead Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/eed0911d937ccd574b25da46f08b3a49085a1e9c/img_1508980219915.jpg"
      },
      {
        "title": "10 min Washington Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/bac6ed8fcd5d5c91c3e7e7d5dcfac228a93e0987/img_1527279590958.jpg"
      },
      {
        "title": "20 min Escalante Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495535712322.jpg"
      },
      {
        "title": "30 min Otztal Alps Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/46d469f1a1e17c5eb236189cb1fc6fddd19dfd4d/img_1527279682203.jpg"
      },
      {
        "title": "15 min Paris Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513705888806.jpg"
      },
      {
        "title": "30 min Alpes Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/031ce0e1ed1258505ba0565a66c3a52c7d0cdc65/img_1472504214388.jpg"
      },
      {
        "title": "15 min US Roads Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/4eeebf32fc195f2452d146e72bfa0b484b55e9b3/img_1519764262230.jpg"
      },
      {
        "title": "10 min Taiwan Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/9e34055c00edcde7441aa75f73594e94046d5691/img_1517349042954.jpg"
      },
      {
        "title": "10 min Patagonia Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/dc8f511a385626610a64dfb3c54a295c74aa2aff/img_1524845852200.jpg"
      },
      {
        "title": "10 min Rugged Trails Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/15b74c39b38994e7b6478eb07a441d19055e1940/img_1503939306123.jpg"
      },
      {
        "title": "15 min Venice Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513705788289.jpg"
      },
      {
        "title": "30 min Tour de Paris Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1519763981134.jpg"
      },
      {
        "title": "15 min New Zealand Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522349302238.jpg"
      },
      {
        "title": "30 min Taroko Gorge Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1462997634712.jpg"
      },
      {
        "title": "20 min Bavaria Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501358773296.jpg"
      },
      {
        "title": "15 min Canadian Mountains Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477603081919.jpg"
      },
      {
        "title": "30 min Salasc Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487868956071.jpg"
      },
      {
        "title": "15 min Grand Teton National Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482863878736.jpg"
      },
      {
        "title": "20 min Big Sur Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485387503015.jpg"
      },
      {
        "title": "60 min Deserts and Dirt Roads Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480523984264.jpg"
      },
      {
        "title": "30 min Canadian National Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485385859682.jpg"
      },
      {
        "title": "30 min Chile Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1506616511140.jpg"
      },
      {
        "title": "20 min Zion National Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/65f3641abfa4e30316ade64de521678ef35d21d7/img_1497992001251.jpg"
      },
      {
        "title": "30 min Mt. Diablo Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1462996524120.jpg"
      },
      {
        "title": "30 min Sydney Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1524845511375.jpg"
      },
      {
        "title": "60 min California National Parks Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482862777818.jpg"
      },
      {
        "title": "60 min New Zealand National Parks Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490629565599.jpg"
      },
      {
        "title": "45 min California National Parks Scenic Run Part 2",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485385507958.jpg"
      },
      {
        "title": "10 min French Suburbs Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1519764499535.jpg"
      },
      {
        "title": "20 min Bocas del Toro Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495532634539.jpg"
      },
      {
        "title": "30 min Pyrenees Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/7cfbc5e1b2ca1fe4c21fe4650b00f3a1f14539e9/img_1467237585112.jpg"
      },
      {
        "title": "45 min Latin Cities Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493152844219.jpg"
      },
      {
        "title": "20 min Summer in the City Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1503940708406.jpg"
      },
      {
        "title": "15 min Yoho National Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522348988842.jpg"
      },
      {
        "title": "30 min California Trails Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511788701151.jpg"
      },
      {
        "title": "60 min Bright Lights Big City Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477602411963.jpg"
      },
      {
        "title": "20 min Northern California Coast Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1497875773780.jpg"
      },
      {
        "title": "30 min Vermilion Cliffs Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493152735322.jpg"
      },
      {
        "title": "30 min Tropical Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/5d5e92198b5e1e3b0c233195243cd63f4f620575/img_1517349220128.jpg"
      },
      {
        "title": "30 min Oregon Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513706822025.jpg"
      },
      {
        "title": "15 min Otago Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485387705346.jpg"
      },
      {
        "title": "30 min Maine Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1506616555008.jpg"
      },
      {
        "title": "30 min Land and Water Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/e41c412d42138591879391726e1cecd3b9e340d7/img_1508980023929.jpg"
      },
      {
        "title": "10 min Mount Tamalpais Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495544206263.jpg"
      },
      {
        "title": "30 min New Taipei City Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1475173092507.jpg"
      },
      {
        "title": "20 min Joshua Tree Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/7358aa4f66e966726b48fb6c6102a2cdf87e2490/img_1506616719870.jpg"
      },
      {
        "title": "45 min Champagne Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1475171933480.jpg"
      },
      {
        "title": "30 min Oregon Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1503940972158.jpg"
      },
      {
        "title": "10 min Vancouver Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522349792032.jpg"
      },
      {
        "title": "15 min Kaibab Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493151788171.jpg"
      },
      {
        "title": "30 min Burgundy and Centre Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/451e95594d34d1a5275eb2801c5d00d973ae02df/img_1469820472366.jpg"
      },
      {
        "title": "60 min Italian Alps Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1477602159893.jpg"
      },
      {
        "title": "15 min Southern California Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501358884268.jpg"
      },
      {
        "title": "30 min Italian Alps Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522348734650.jpg"
      },
      {
        "title": "45 min French Countryside Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1462996821723.jpg"
      },
      {
        "title": "20 min US National Parks Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/408e8b627066c94e7967916a46015a7120d529c1/img_1517348994006.jpg"
      },
      {
        "title": "30 min Puna Coast Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/1cc442d5e9da8c29f7cb784c6508721717952544/img_1472504195349.jpg"
      },
      {
        "title": "10 min Smooth Riding Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511789076295.jpg"
      },
      {
        "title": "15 min Kootenay Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501355679252.jpg"
      },
      {
        "title": "30 min Glaciers of Argentina Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/f6d7664f0b98750185abbd2c454fb2c940956867/img_1469820442484.jpg"
      },
      {
        "title": "15 min Italian Alps Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/d0686f5e8e26ae293656c227b8dda6bf33aab5dc/img_1506616869731.jpg"
      },
      {
        "title": "30 min Trento Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490630344430.jpg"
      },
      {
        "title": "10 min Casco Bay Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1497877619929.jpg"
      },
      {
        "title": "15 min Porteños Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1524845400757.jpg"
      },
      {
        "title": "45 min Bay Area Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501357522650.jpg"
      },
      {
        "title": "30 min Sun Moon Lake Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/5326562e4da9da8b3e5d4c0f0e303440aefa197e/img_1472504206237.jpg"
      },
      {
        "title": "10 min Moki Dugway Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1497876038554.jpg"
      },
      {
        "title": "45 min Mt. Rainier Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/9482f03c76a668084b5e5bef7795724da191e857/img_1467237514754.jpg"
      },
      {
        "title": "30 min Canyons Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487870296252.jpg"
      },
      {
        "title": "20 min Tahoe Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482863535574.jpg"
      },
      {
        "title": "45 min Columbia River Gorge Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/66c1d55cb5f0a0b01eaaf397c8a463a2b8b9125f/img_1469820556880.jpg"
      },
      {
        "title": "10 min Vancouver Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522349792032.jpg"
      },
      {
        "title": "10 min Mt. Washington State Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490630674859.jpg"
      },
      {
        "title": "30 min Napa Valley Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/873e6c3cea9aeb5bb4d0e7fe24eedd9f4f92793c/img_1467237611038.jpg"
      },
      {
        "title": "30 min Puntarenas Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1475172862339.jpg"
      },
      {
        "title": "20 min Panama Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1524845652994.jpg"
      },
      {
        "title": "20 min Acadia National Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480523592313.jpg"
      },
      {
        "title": "30 min Tropical Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/5d5e92198b5e1e3b0c233195243cd63f4f620575/img_1517349220128.jpg"
      },
      {
        "title": "30 min Haleakala Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/c33e09161e8f1a60b0c8f74fdb0911ad5c54d6dc/img_1469820409860.jpg"
      },
      {
        "title": "20 min Cote D'Azur Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1522349525501.jpg"
      },
      {
        "title": "15 min Humboldt County Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480453790119.jpg"
      },
      {
        "title": "60 min Cities By The Sea Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1482862906772.jpg"
      },
      {
        "title": "20 min Central America Scenic Run Part 2",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513706510231.jpg"
      },
      {
        "title": "20 min Switzerland Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/6043491f244fb96892e83aec032ee477c8a9fcfe/img_1519764174375.jpg"
      },
      {
        "title": "60 min Oregon and Washington Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1480453158119.jpg"
      },
      {
        "title": "30 min Costa Rica Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1462997909035.jpg"
      },
      {
        "title": "10 min Buenos Aires Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1513705654665.jpg"
      },
      {
        "title": "20 min Morzine Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495544854179.jpg"
      },
      {
        "title": "15 min Shasta-Trinity Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/92e2b4fd456d0ef904646509bbcef420f24fdbf8/img_1517349178242.jpg"
      },
      {
        "title": "10 min California Dreaming Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1519764409312.jpg"
      },
      {
        "title": "30 min Natural Peaks Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/da0a2df739f8d86da0177e47ad4f4e916cf9e21c/img_1508980277243.jpg"
      },
      {
        "title": "10 min Inyo National Forest Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/a682a66d4086f890d9ff80ab486dbef85d885879/img_1506616990838.jpg"
      },
      {
        "title": "15 min Beach Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1503940572378.jpg"
      },
      {
        "title": "30 min Normandy Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/e2956411fd972323544793629cdd3ece2d75c401/img_1472504185251.jpg"
      },
      {
        "title": "20 min Countryside Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/1cbde1638bd16c7a97a18fbef783cf31e6c4113c/img_1508980244768.jpg"
      },
      {
        "title": "20 min South Dakota Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487871286416.jpg"
      },
      {
        "title": "20 min Bryce Canyon National Park Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490630535453.jpg"
      },
      {
        "title": "15 min South Dakota Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/8759952f006b41a1973c9dc0ca285b584b97a0f4/img_1517349092237.jpg"
      },
      {
        "title": "30 min Torres del Paine Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/3111475967fd9e115e622f3899bfc9fbe02a2fd3/img_1467237563649.jpg"
      },
      {
        "title": "20 min Cinque Terre Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1493152180671.jpg"
      },
      {
        "title": "10 min Santiago Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1501357418245.jpg"
      },
      {
        "title": "45 min Alajuela Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1490630003798.jpg"
      },
      {
        "title": "60 min Volcanic Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1495544334451.jpg"
      },
      {
        "title": "30 min Death Valley Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1503941122097.jpg"
      },
      {
        "title": "15 min Hawaii Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1511789007693.jpg"
      },
      {
        "title": "15 min San Francisco Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/16b6a424db10405d9e1df44af0eb10407a323c8d/img_1527279505460.jpg"
      },
      {
        "title": "15 min Qingshui Cliff Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1487871510166.jpg"
      },
      {
        "title": "10 min Hollywood Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/cdb91fad4f92b17c98be27068fb288f4361d8c8c/img_1527279478321.jpg"
      },
      {
        "title": "30 min Sunset Scenic Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/559f8f145c7a0988fd220ead271a9a1790ea7e7e/img_1485386067647.jpg"
      }
    ]

    let outdoor = [
      {
        "title": "30 min Beginner HIIT Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/9962947a7ad778192a385a0f231862367ad7c7cb/img_1528943682452.jpg"
      },
      {
        "title": "45 min Beg. Marathon Race Prep",
        "image": "https://s3.amazonaws.com/peloton-ride-images/1efe114f6f378b52e2a539798388661f573ec6fc/img_1528903541525.jpg"
      },
      {
        "title": "45 min Marathon Race Prep",
        "image": "https://s3.amazonaws.com/peloton-ride-images/aa8e7bc2509d876868dce1b0e159bb395a28d4b6/img_1528943415710.jpg"
      },
      {
        "title": "20 min HIIT Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/576542a267230d1e8183bd206efcf12a8a9adc6c/img_1528918354031.jpg"
      },
      {
        "title": "30 min 5K Race Prep",
        "image": "https://s3.amazonaws.com/peloton-ride-images/48b6dfc90f45540894fb8a087c82818324be41af/img_1528943465224.jpg"
      },
      {
        "title": "20 min Beginner Intervals Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/faa56257e3551e4f57e91dd9a80e40cc7f74e835/img_1528917960388.jpg"
      },
      {
        "title": "45 min Hip Hop Fun Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/3389365853c9ceb3b707934c1e2ac5d6f4533859/img_1528943925767.jpg"
      },
      {
        "title": "60 min Rock Fun Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/fe2486f018196566410f3fb3afd3f515807026d8/img_1528943278048.jpg"
      },
      {
        "title": "45 min 80s Fun Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/492447a3368902e3e21a47cb3ef9fd45e6438dd5/img_1528918280063.jpg"
      },
      {
        "title": "30 min Walk + Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/74b1cb7d124bad8535a87a1943ca731b18f177dd/img_1528943808038.jpg"
      },
      {
        "title": "20 min Intervals Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/a9f9f309359bcc4e922f0022423a790bf13df06c/img_1528917991181.jpg"
      },
      {
        "title": "30 min Beginner 5K Race Prep",
        "image": "https://s3.amazonaws.com/peloton-ride-images/c0a46dd9ed79bdb3b55e9bb4934ad00d181f58ea/img_1528943883817.jpg"
      },
      {
        "title": "30 min Pop Fun Run",
        "image": "https://s3.amazonaws.com/peloton-ride-images/1630b2a7ace4e40e111a22e79fdc2892d7157996/img_1528903323557.jpg"
      },
      {
        "title": "20 min Pop Fun Walk",
        "image": "https://s3.amazonaws.com/peloton-ride-images/54dde46be5ee4ae38fe778f1ce16ee9f48172e3c/img_1528918314036.jpg"
      },
      {
        "title": "30 min Power Walking",
        "image": "https://s3.amazonaws.com/peloton-ride-images/5e4a25db34a083330679a61388f0b6442f90aa23/img_1528943365959.jpg"
      }
    ]

    let categories = [
      {
        "image": "https://browse-categories-images-prod.s3.amazonaws.com/8a96055d5928467dab3cae3403f94190",
        "title": "Cycling"
      },
      {
        "image": "https://browse-categories-images-prod.s3.amazonaws.com/2eaf057fdc74455fa491283439bffdf8",
        "title": "Running"
      },
      {
        "image": "https://browse-categories-images-prod.s3.amazonaws.com/e5ab31b7f29c496dbedc4c96256f7654",
        "title": "Bootcamp"
      },
      {
        "image": "https://browse-categories-images-prod.s3.amazonaws.com/89f79d6f58424035854e9dc0a8c79008",
        "title": "Outdoor"
      },
      {
        "image": "https://browse-categories-images-prod.s3.amazonaws.com/498dbaa0cafd4fed94c4e193574a6539",
        "title": "Stretching"
      },
      {
        "image": "https://browse-categories-images-prod.s3.amazonaws.com/63e7b61454cf476ea9ee1421595ff402",
        "title": "Strength"
      },
      {
        "image": "https://browse-categories-images-prod.s3.amazonaws.com/836c45c76d45406698e37d1022e13ac5",
        "title": "Yoga"
      },
      {
        "image": "https://browse-categories-images-prod.s3.amazonaws.com/207965f33f114c669ad9161bd7c891eb",
        "title": "Cardio"
      }
    ]

		const imageTypes = [
			{
				name: "Scenic Rides",
				width: '394',
				height: '394',				
				maxFileSize: '',
				usage: [
					{
						location: 'Bike - More',
						image: '/bike-tread/scenic_rides.png'
					}                                                                            
        ],
				assets: scenicRides
      },
			{
				name: "Scenic Runs",
				width: '394',
				height: '394',				
				maxFileSize: '',
				usage: [
					{
						location: 'Tread - More',
						image: '/bike-tread/scenic_runs.png'
					}                                                                            
        ],
				assets: scenicRuns
      },
			{
				name: "Outdoor",
				width: '394',
				height: '394',				
				maxFileSize: '',
				usage: [
					{
						location: 'iOS - Outdoor Class Detail',
						image: '/ios/outdoor_class_detail.png'
          },
					{
						location: 'iOS - Outdoor Workout',
						image: '/ios/outdoor_workout.png'
					}                                                                                      
        ],
				assets: outdoor
      },
			{
				name: "Categories",
				width: '394',
				height: '394',				
				maxFileSize: '',
				usage: [
					{
						location: 'iOS - Class in Progress Modal',
						image: '/ios/classes.png'
					}                                                                            
        ],
				assets: categories
      }                  																						
		]

		return {
      imageTypes,
      platforms: 'all'
		}
  },
	methods: {
    getImage(url) {
      return require(`~/assets/images${url}`)
    }
	}
}
</script>