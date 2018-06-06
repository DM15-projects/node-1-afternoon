let messages = [];
let id = 0;

const create = (req, res, next) => {
  let message = {
    id: id,
    text: req.body.text,
    time: req.body.time
  };
  messages.push(message);
  id++;
  res.status(200).json(messages);
};

const read = (req, res, next) => {
  res.status(200).json(messages);
};

const update = (req, res, next) => {
  const updateID = req.params.id;
  for (i = 0; i < messages.length; i++) {
    if (messages[i].id === +updateID) {
      messages[i] = req.body;
    }
  }
  res.status(200).json(messages);
};

// const deleteMessage = (req, res) => {
//   const deleteID = req.params.id;
//   messageIndex = messages.findIndex(message => message.id == deleteID);
//   messages.splice(messageIndex, 1);
//   res.status(200).send(messages);
// };

const deleteMessage = (req, res, next) => {
  const deleteID = req.params.id;
  for (i = 0; i < messages.length; i++) {
    // console.log(i, messages[i], deleteID);
    if (messages[i].id === +deleteID) {
      messages.splice(i, 1);
    }
  }
  res.status(200).json(messages);
};

module.exports = {
  create,
  read,
  update,
  deleteMessage
};
