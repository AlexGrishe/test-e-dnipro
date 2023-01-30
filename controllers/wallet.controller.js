const {Wallets} = require('../models');
// const md5 = require('md5');

const addWallet = async (req, res) => {
    const {id, name, img, goal, collected, last_paid, user_id} = req.body;
    const wallet = await Wallets.create({id, name, img, goal, collected, last_paid, user_id});
    return res.json({
        wallet: wallet
    });
}

const getWallets = async (req, res) => {
    let wallets = await Wallets.findAll();
    return res.json({
        wallets: wallets
    });
}

const getUserWallets = async (req, res) => {
    let user_id = req.params.id;
    let wallets = await Wallets.findAll({where: {user_id: user_id}});
    return res.json({
        wallets: wallets
    });
}

// const updateParent = async (req, res) => {
//     let id = req.params.id;
//     const parent = await Parents.update(req.body, {where: {id: id}})
//     return res.json({
//         parent: parent
//     });
// }
//
// const deleteParent = async (req, res) => {
//     let id = req.params.id;
//     await Parents.destroy({where: {id: id}})
//     return res.json({
//         message: 'Parent is deleted!'
//     });
// }
//
// const getParentChildren = async (req, res) => {
//     const deviceId = req.headers['device_id'];
//     const child = await ChildrenDevices.findOne({where: {device_id: deviceId}})
//     const data = await Parents.findAll({
//         include: [{
//             model: ChildrenDevices,
//             as: 'children_devices'
//         }],
//         where: {id: child.id}
//     })
//     return res.json({
//         data: data
//     });
// }
//
// const getChildrenOfParent = async (req, res) => {
//     const parentId = req.body.id;
//     const childrenList = await ChildrenDevices.findAll({
//         where: {
//             parent_id: parentId
//         }
//     })
//     let incomingContact = [];
//     for (let i = 0; i < childrenList.length; i++) {
//         let obj = await Contacts.findAll({
//             include: [{
//                 model: ChildrenDevices,
//                 as: 'contacts_child'
//             }],
//             where: {type: 'incoming', children_id: childrenList[i].id}
//         })
//         incomingContact.push(...obj)
//     }
//     let outcomingContact = [];
//     for (let i = 0; i < childrenList.length; i++) {
//         let obj = await Contacts.findAll({
//             include: [{
//                 model: ChildrenDevices,
//                 as: 'contacts_child'
//             }],
//             where: {type: 'outcoming', children_id: childrenList[i].id}
//         })
//         outcomingContact.push(...obj)
//     }
//
//     return res.json({
//         childrenList: childrenList, incomingContact, outcomingContact
//     })
// }
//
// const getLoginPage = async (req, res) => {
//     res.render('authorization')
// }
//
// const checkParentAuthorization = async (req, res) => {
//     // let parentAuthEmail = req.headers['email'];
//     const data = null;
//     const email = req.body.email
//     const password = req.body.password
//     const result = await Parents.findOne({
//         where: {
//             email: email,
//             password: md5(password)
//         }
//     })
//     if (result) {
//         const checkAgreements = await Parents.findOne({
//             where: {
//                 email: email,
//                 agreement_date: data
//             }
//         })
//         if (!checkAgreements) {
//             return res.json(
//                 {
//                     auth: true,
//                     email: email,
//                     id: result.id,
//                     agreement_date: true
//                 })
//         }
//         return res.json(
//             {
//                 auth: true,
//                 email: email,
//                 id: result.id,
//                 agreement_date: false
//             })
//     } else {
//         return res.json({
//             auth: false
//         })
//     }
// }
//
// const acceptAgreement = async (req, res) => {
//     let parentAuthEmail = req.body.email;
//     let date = new Date().toLocaleDateString();
//     // let date = null;
//     // const checkAgreements = await Parents.findOne({
//     //     where: {
//     //         email: parentAuthEmail,
//     //         agreement_date: date
//     //     }
//     // })
//     // console.log(checkAgreements)
//
//     const result = await Parents.update(
//         {
//             agreement_date: date
//         },
//         {
//             where: {
//                 email: parentAuthEmail
//             }
//         })
//     return res.json({
//         result: result
//     })
// }


module.exports = {
    addWallet,
    getWallets,
    getUserWallets
}
