# network-monitor

## Abhängigkeiten installieren

```shell
$ npm install
```

## Entwicklungsversion ausführen

- Wird zur Laufzeit kompiliert
- Bequem(er), aber schlechtere Performance

```shell
$ npm run dev
```

## Production-Build erzeugen

- Wird "ahed of time" kompiliert
- Zusätzlicher Compile-Schritt, daher bessere Performance

```shell
$ npm run build
```

Anschließend kann man den kompilierten Production-Build starten:

```shell
$ node build/app.js
```
