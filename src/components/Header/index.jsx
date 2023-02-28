import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile , Logout } from './style'

export function Header(){
  return (
    <Container>
      <Profile>
        <img 
          src="http://github.com/jmonteiroh.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>João Paulo Monteiro</strong>
        </div>

      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
}