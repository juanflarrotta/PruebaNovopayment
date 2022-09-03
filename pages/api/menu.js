const dataMenu = {
  "lista": [{
    "card_list": [],
    "pays_transfer": [{
      "between_cards": [],
      "banks": [],
      "credit_card": []
    }],
    "support": [{
      "lock": [],
      "change_pass": []
    }],
    "enterprises": []
  }]
};

export default function handler(req, res) {
  res.status(200).json(dataMenu)
}
