# TIMS

It uses Live Traffic Disruption (or TIMS) from here: https://api-portal.tfl.gov.uk/docs

No database is required to run this app, only Node.

## Setup

Install all dependencies:

```
npm install
```

Copy example `dotenv` file:

```
cp .env.example .env
```

And add your Google Maps API key in there.

## Run 

To start server execute:


```
node bin/wwww
```

And visit your browser under `http://localhost:3000`

