import { define } from 'typeorm-seeding';
import { User } from '../../entities';
define(User, () => {
  const user = new User();
  user.username = 'admin';
  user.email = 'admin@gmail.com';
  user.password = 'admin123';
  return user;
});
