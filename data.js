export const db = {
  "lojas": [
    {
      "id": "loja1",
      "nome": "Shopclub",
      "ambiente": "qa",
      "url": "https://shopclub.example.com"
    },
    {
      "id": "loja2",
      "nome": "Fastshop B2B",
      "ambiente": "prd",
      "url": "https://b2b.fastshop.example.com"
    }
  ],
  "categorias": {
    "loja1": [
      {
        "id": "cat2",
        "nome": "Carrinho"
      },
      {
        "id": "cat1",
        "nome": "PDP"
      }
    ],
    "loja2": [
      {
        "id": "cat3",
        "nome": "Home"
      },
      {
        "id": "cat4",
        "nome": "Checkout"
      }
    ]
  },
  "cenarios": [
    {
      "id": "c1",
      "lojaId": "loja1",
      "categoriaId": "cat1",
      "execucao": "Manual",
      "nomeTeste": "Validar preço na PDP",
      "evidDesktop": "",
      "evidMobile": "",
      "status": ""
    },
    {
      "id": "c2",
      "lojaId": "loja1",
      "categoriaId": "cat1",
      "execucao": "Automatizado",
      "nomeTeste": "Verificar imagens na PDP",
      "evidDesktop": "",
      "evidMobile": "",
      "status": ""
    },
    {
      "id": "c3",
      "lojaId": "loja1",
      "categoriaId": "cat2",
      "execucao": "Manual",
      "nomeTeste": "Adicionar item ao carrinho",
      "evidDesktop": "",
      "evidMobile": "",
      "status": ""
    },
    {
      "id": "c4",
      "lojaId": "loja2",
      "categoriaId": "cat3",
      "execucao": "Manual",
      "nomeTeste": "Abrir Home e validar banners",
      "evidDesktop": "",
      "evidMobile": "",
      "status": ""
    },
    {
      "id": "c5",
      "lojaId": "loja2",
      "categoriaId": "cat4",
      "execucao": "Automatizado",
      "nomeTeste": "Fluxo de checkout com boleto",
      "evidDesktop": "",
      "evidMobile": "",
      "status": ""
    }
  ]
}