# Monk.Grid
[Exemplo](https://agenciamonk.github.io/grid/)

- Criado com flexbox
- Baseado em container e item
- CONTAINER deve ter um height fixo (aconselho usar min-height :D)

#Classes para o CONTAINER
classes principais para o container:
- container (Principal)
- wrap ou nowrap
- column (row e padrão no container)

classes para alinhar o item dentro do container:
- top-left
- top-center
- top-right
- center-left
- center-center
- center-right
- bottom-left
- bottom-center
- bottom-right

#Classes para o ITEM
Tamanhos flex:
- flex (flex: 1, os outros possuem flex-grow: x)
- flex1
- flex2
- flex3
- flex4
- flex5
- flex6
- flex7
- flex8
- flex9
- flex10
- flex11
- flex12
Clases para quebrar(wrap) os itens, flex-basis:
- basis1(100px)
- basis2(200px)
- basis3(300px)
- basis4(400px)
- basis5(500px)
- basis6(600px)
- basis7(700px)
- basis8(800px)
- basis9(900px)
Para alinhar o texto:
- text-left
- text-center
- text-right

#Classes para o item
ex:
```html
<div class="container center-center text">
  <div class="item text-center">
    <h1>Hello world!!!</h1>
  </div>
</div>
```

```html
<div class="container wrap">
  <div class="flex1">

  </div>
  <div class="flex2">

  </div>
  <div class="flex3">

  </div>
</div>
```

