'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '12345678@Abc',
      firstName: 'Phan',
      lastName: 'Phong',
      phoneNumber: 'Phong',
      address: '15B Dong Quan',
      gender: 1,
      roleId: "R1",
      PositionId: null,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};