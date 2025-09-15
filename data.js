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
    },
    {
      "id": "duy9z9zc",
      "nome": "DionisioStore",
      "ambiente": "ws",
      "url": "www.store.com"
    }
  ],
  "categorias": {
    "loja1": [
      {
        "id": "cat2",
        "nome": "Carrinho"
      },
      {
        "id": "ni339gjl",
        "nome": "Checkout"
      },
      {
        "id": "cat1",
        "nome": "PDP"
      }
    ],
    "loja2": [
      {
        "id": "cat4",
        "nome": "Checkout"
      },
      {
        "id": "cat3",
        "nome": "Home"
      }
    ],
    "duy9z9zc": [
      {
        "id": "1wrdrw3h",
        "nome": "MINICART"
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
    },
    {
      "id": "lt2s95zc",
      "lojaId": "loja1",
      "categoriaId": "ni339gjl",
      "execucao": "Manual",
      "nomeTeste": "[Checkout] - Validar cartões",
      "evidDesktop": "",
      "evidMobile": "",
      "status": ""
    },
    {
      "id": "b6vfbduf",
      "lojaId": "duy9z9zc",
      "categoriaId": "1wrdrw3h",
      "execucao": "Manual",
      "nomeTeste": "Validar minicart",
      "evidDesktop": "",
      "evidMobile": "",
      "status": ""
    },
    {
      "id": "rhjb4uds",
      "lojaId": "duy9z9zc",
      "categoriaId": "1wrdrw3h",
      "execucao": "Manual",
      "nomeTeste": "Validar produtos",
      "evidDesktop": "",
      "evidMobile": "",
      "status": ""
    }
  ]
};
