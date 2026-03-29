import aadp from './assets/aadp.jpg'
import mindset from './assets/mindset.jpg'
import opdh from './assets/opdh.jpg'
import alita from './assets/alita-cover.jpg'
import vendetta from './assets/v_cover.jpg'
import berserk from './assets/berserk_cover.jpg'
import crepusculo from './assets/crepusculo.jpg'
import ha_azul from './assets/ha_azul.jpg'
import pride_and_prejudice from './assets/pride_and_prejudice.jpg'

import styles from './App.module.css'
import Card from './components/Card'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
    <h1 className={styles.storeTitle}>Book Sto.re</h1>
    <Card 
      cover={aadp}
      title="As Armas da Persuasão"
      author="Robert Cialdini"
      description="Depois de passar anos caindo na lábia de vendedores, arrecadadores de doações e operadores de telemarketing, o psicólogo Robert B. Cialdini resolveu se dediar ao estudo da persuasão."
      link='https://www.amazon.com.br/As-armas-persuas%C3%A3o-Robert-Cialdini/dp/8575428098'
      quant={"Quantidade de Exemplares: " + 0 + " unidade."}
      bgColor="rgb(254, 254, 222)" /*Giancoli*/
    />
    <Card 
      cover={mindset}
      title="Mindset - A Nova Psicologia do Sucesso"
      author="Carol S. Dweck"
      description="Dweck revela de forma brilhante como o sucesso pode ser alcançado pela maneira como lidamos com nossos objetivos."
      link="https://www.amazon.com.br/Mindset-Carol-S-Dweck/dp/8547000240"
      quant={"Quantidade de Exemplares: " + 5 + " unidades."}
      bgColor="rgb(254, 254, 222)" /*Giancoli*/
    />
    <Card 
      cover={opdh}
      title="O Poder do Hábito"
      author="Charles Duhigg"
      description="Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama."
      link="https://www.amazon.com.br/poder-do-h%C3%A1bito-Charles-Duhigg/dp/8539004119"
      quant={"Quantidade de Exemplares: " + 10 + " unidades."}
      bgColor="rgb(254, 254, 222)" /*Giancoli*/
    />
    <Card 
      cover={alita}
      title="Alita: Anjo de Combate"
      author="Yukito Kishiro"
      description="Alita é uma ciborgue que foi encontrada em um ferro-velho por um cientista. Ela não se lembra de nada do seu passado, mas descobre que tem habilidades incríveis de luta."
      link="https://www.amazon.com.br/Battle-Angel-Alita-Vol-English-ebook/dp/B071DZZWKG?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=157AFJ8QWXV2I&dib=eyJ2IjoiMSJ9.5BvgZ5ycQrdaZ1qRHDvSJXB8VcHK1Ltc7M0YC3B-WEgYhSqfcqpFUYp-vx1XTYJ3atPasWiZZEnFShsrvPO437VmFGQRefsAsdq15k1rwFiC0LaJkEdQFk3WwMDup5atwI49ksJMQxXUoz8G40njeoBswN0gYD-7uO44IjC8Zuq-CNnRJO9mLnK5uQBaYuYG3OzI_owZflu_GIDENrzxhBI7ZjQ9KhDt1zaKKSKWwA8.buROkDZeh-8mx3p2InMFcLqG2TVamnSJIaRd8KhW5iI&dib_tag=se&keywords=alita+vol+1&qid=1774704165&s=books&sprefix=alita+vol+1%2Cstripbooks%2C204&sr=1-3"
      quant={"Quantidade de Exemplares: " + 22.222 + " unidades."}
      bgColor="rgba(250, 209, 96, 0.64)" /*Mateus*/
      hoverBgColor="rgba(184, 142, 70, 0.81)"
    />
    <Card
      cover={vendetta}
      title="V de Vingança"
      author="Alan Moore"
      description="V é um anarquista inglês que luta contra o governo totalitário da Grã-Bretanha."
      link='https://www.amazon.com.br/V-Vingan%C3%A7a-Alan-Moore/dp/8565484106?crid=1X4H5AY2FNR58&dib=eyJ2IjoiMSJ9.p2CPDO18gtUkCdYRyL27FFMJofBNPmNTnsKUs8SBj397ZhOm6opV6uhTlmTUsYkaHeOc8cAaQTS32rhl-edDHbXRJzcc_9YpJ-K461du3mdvCFNXVqlKTQGwKZSKh949N7PoO3q5Rw6Jl8AFmwstO523qr1BGHyq4dQNwfju3PCdH_S97qAbLKvnpHWMrIcBk4faKNjWRqTyrNt6XogSMhVoo-ALis2AAxTaGWUG41M.PJ_pDLTGE8UzBxlCFw_wfBGzykRsJTFRvipczdTZeHc&dib_tag=se&keywords=v+de+vingan%C3%A7a&qid=1774704404&s=books&sprefix=v+de+vinga%2Cstripbooks%2C197&sr=1-1'
      quant={"Quantidade de Exemplares: " + 1 + " unidade."}
      bgColor="rgba(250, 209, 96, 0.64)" /*Mateus*/
      hoverBgColor="rgba(184, 142, 70, 0.81)"
    />
    <Card
      cover={berserk}
      title="Berserk"
      author="Kentaro Miura"
      description="Griffith, um jovem líder carismático, sonha em conquistar seu próprio reino. Para isso, ele forma a Tropa do Falcão, um bando de mercenários liderado por Guts, um espadachim habilidoso e solitário."
      link='https://www.amazon.com.br/Berserk-Edi%C3%A7%C3%A3o-Luxo-Kentaro-Miura/dp/8542617096?dib=eyJ2IjoiMSJ9.R6gLUotGDlpfDdSNKbo1w8bNb-KDsdCX2V2rLf_SOf8tS4hOsSX1eGdZuv3ndnVryBhickFSjrH2wRGpn29G0gY8CRIyccZRxmLjs6eovYRV_FzwaVltMONZpZLCqsUyMCCb-Kkj0L86pcwU0PoXjf9oWt_ijWE8GSJK632nOa9Jx27a88sWIl0u9cReF5HTkSoYetkyXIGrqEkuofKhHQyiMZXBWF71Jq7xrgKaYc6hOaqJLadcfo5Vx6_BRtmRw7G5GRW4aX7FXuMBgxZGsAYxddNPHfdef0z869NzrWE.yXAHxCJBdze-OjUZOL-vEU7t9xOMY-ycX47yw1lBMpc&dib_tag=se&keywords=berserk&qid=1774704547&sr=8-1'
      quant={"Quantidade de Exemplares: " + 1903 + " unidades."}
      bgColor="rgba(250, 209, 96, 0.64)" /*Mateus*/
      hoverBgColor="rgba(184, 142, 70, 0.81)"
    />
    <Card
      cover={crepusculo}
      title="Crepúsculo"
      author="Stephenie Meyer"
      description="Bella Swan se muda para a pequena e chuvosa cidade de Forks, no estado de Washington, para viver com seu pai. Lá, ela conhece Edward Cullen, um garoto misterioso e fascinante que desperta nela sentimentos intensos e perigosos."
      link='https://www.amazon.com.br/Crep%C3%BAsculo-Stephenie-Meyer/dp/8598078301'
      quant={"Quantidade de Exemplares: " + 2 + " unidades."}
      bgColor="rgba(68, 58, 119, 0.8)" /*Tassia*/
      hoverBgColor="rgba(113, 104, 155, 0.8)"
    />
    <Card
      cover={ha_azul}
      title="Homem-Aranha: Azul"
      author="Jeph Loeb"
      description="Peter Parker relembra os dias de glória como Homem-Aranha, quando ele e Mary Jane Watson estavam juntos."
      link='https://www.amazon.com.br/Homem-aranha-Azul-Jeph-Loeb/dp/8583684243'
      quant={"Quantidade de Exemplares: " + 22 + " unidades."}
      bgColor="rgba(68, 58, 119, 0.8)" /*Tassia*/
      hoverBgColor="rgba(113, 104, 155, 0.8)"
    />
    <Card
      cover={pride_and_prejudice}
      title="Orgulho e Preconceito"
      author="Jane Austen"
      description="A história acompanha Elizabeth Bennet, uma jovem inteligente e independente, que se apaixona por Mr. Darcy, um homem rico e arrogante."
      link='https://www.amazon.ca/Pride-Prejudice-Classic-Reprint-Austen/dp/1330916050'
      quant={"Quantidade de Exemplares: " + 19 + " unidades."}
      bgColor="rgba(68, 58, 119, 0.8)" /*Tassia*/
      hoverBgColor="rgba(113, 104, 155, 0.8)"
    />
    <ScrollToTop />
    </>
  )
}

export default App