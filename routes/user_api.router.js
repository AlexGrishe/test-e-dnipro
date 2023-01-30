const router = require('express').Router();

const {
    userController,
    walletController
} = require('../controllers');

router.post('/user', userController.addUser);

router.post('/wallet', walletController.addWallet);

router.get('/users', userController.getUsers);

router.get('/wallets', walletController.getWallets);

router.get('/wallets/:id', walletController.getUserWallets);

router.get('/:id', userController.getUser);

//
// router.post('/agreement', agreementsController.addAgreement);
//
// router.post('/child', childrenDevicesController.addChildDevice);
//
// router.post('/language', languagesController.addLanguage);
//
// router.post('/file', filesController.addFile);
//
// router.post('/contact', contactsController.addContact);
//
// router.post('/auth', parentsController.checkParentAuthorization);
//
// router.put('/agreement_date', parentsController.acceptAgreement);
//
// router.get('/files', filesController.getFiles);
//
// router.get('/contacts_list', contactsController.getContacts);
//

// router.get('/agreements_list', agreementsController.getAgreements);
//
// router.get('/children', childrenDevicesController.getChildrenDevices);
//
// router.get('/parent_children', parentsController.getParentChildren);
//
// router.post('/children_parent_list', parentsController.getChildrenOfParent)
//
// router.get('/auth', parentsController.getLoginPage);
//
// router.get('/', languagesController.checkBrowserLanguage);
//
// router.get('/languages/:id', languagesController.chooseLanguage);
//
// router.get('/agreements/:language_id', agreementsController.localeAgreement);
//

//
// router.put('/:id', parentsController.updateParent);
//
// router.delete('/:id', parentsController.deleteParent);
//
// router.delete('/language/:locale', languagesController.deleteLanguage);

module.exports = router;
