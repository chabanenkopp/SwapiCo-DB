export default class SwapiService {
  _apiBase = "https://swapi.co/api"
  _imageBase = "https://starwars-visualguide.com/assets/img"

  getData = async url => {
    try {
      const res = await fetch(`${this._apiBase}${url}`)
      return res.json()
    } catch (err) {
      console.log(`Could not fetch ${url}, received ${err}`)
    }
    // if (!res.ok)
    //   throw new Error(`Could not fetch ${url}, received ${res.status}`)
  }

  getAllPeople = async () => {
    const res = await this.getData("/people")
    return res.results.map(this._transformPerson)
  }

  getPerson = async id => {
    const person = await this.getData(`/people/${id}`)
    return this._transformPerson(person)
  }

  getAllPlanets = async () => {
    const res = await this.getData(`/planets`)
    return res.results.map(this._transformPlanet)
  }

  getPlanet = async id => {
    const planet = await this.getData(`/planets/${id}`)
    return this._transformPlanet(planet)
  }

  getAllStarships = async () => {
    const res = await this.getData(`/starships`)
    return res.results.map(this._transformStarship)
  }

  getStarship = async id => {
    const starship = await this.getData(`/starships/${id}`)
    return this._transformStarship(starship)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }
  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }
  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }
}

const Service = new SwapiService()
Service.getAllStarships().then(person => console.log(person))
