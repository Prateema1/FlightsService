const express = require('express');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
 console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
//  Logger.info("Successfully started the server", "root", {})
// bad code alert

const {Airport, City} = require('./models');
const delhi = await City.findByPk(1);
// const airport = await delhi.createAirport({name: 'Safdargunj Airport', code: 'SEL'});
// console.log(airport);

// const aiportsInDelhi = await delhi.getAirports();
// console.log(aiportsInDelhi);

// const delairport = await Airport.findByPk(1);
// console.log(delairport, "DEL AIRPORT");
// await delhi.removeAirport(delairport);
await City.destroy({
  where: {
    id: 1
  }
})
});

