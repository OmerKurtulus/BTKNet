# İçerik

* HTML
* CSS
* JavaScript

##npm

>npm init

>Node Package Management için package.json dosyası oluşturur.

>Script

|script|Açıklama                                                           |
|-------|------------------------------------------------------------------|
| start |npm start komutu ile birlikte çalıştırılıcak script belirler.     |
| start |npm run server komutu ile birlikte çalıştırılıcak script belirler.|

* start(npm start)
* server(npm run server)

##git
>git init

>git config --global user.email "email"

>git config -- user.name "name"


>git switch -c "branchname"

>git branch -a

>git checkout "branchname"

>git merge "branchname"

>git branch -d "branchname"

>git push origin -d "branchname"

## JavaScript

## Array üzerinde dolaşma(traverse)

```js
  for(let person of arr) {
  const element = document.createElement("div");
  element.innerHTML = `${person.id} ${person.name} ${person.age}`;
  document.getElementById("root").append(element);
}
```