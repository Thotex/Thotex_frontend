<template>
  <section class="about-section">
    <div class="container">
      <div class="content">
        <h1 class="title">Visión</h1>
        <p>Thotex será líder para el 2027 ofreciendo servicios contables a pequeños y medianos comercios, siendo una plataforma fiable, de fácil uso y comprensión ayudándoles a nuestros clientes con un enfoque en la transparencia y la excelencia en el servicio.</p>
      </div>
      <div class="content">
        <h1 class="title">Misión</h1>
        <p>Ofrecer una plataforma para la gestión de nómina e inventario, en la cual pueden gestionar y automatizar procesos financieros y contables, para que nuestros usuarios tomen las mejores decisiones en sus negocios.</p>
      </div>
    </div>
    <div class="team-container">
    <div class="team-card" v-for="member in teamMembers" :key="member.name">
      <div class="team-card-image">
        <img :src="member.image" :alt="member.name" />
      </div>
      <div class="team-card-content">
        <h2>{{ member.name }}</h2>
        <p>{{ member.role }}</p>
        <div class="social-links">
          <a :href="member.git" target="_blank" rel="noreferrer">
            <IconifyIcon icon="mdi:github" width="24" height="24" />
          </a>
          <a :href="member.linked" target="_blank" rel="noreferrer">
            <IconifyIcon icon="mdi:linkedin" width="24" height="24" />
          </a>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup lang="ts">
  const teamMembers = [
  {
    name: 'Miguel Angel Pinzón Garcia',
    role: 'Desarrollador Frontend',
    image: 'https://i.imgur.com/dHmaI0T.jpeg',
    git: 'https://github.com/MiPinzon',
    linked: 'https://www.linkedin.com/in/miguel-angel-pinzón-garcia-1771a9267/',
  },
  {
    name: 'Juan David Vásquez Pinzon',
    role: 'Desarrollador Frontend',
    image: 'https://i.imgur.com/DBlXSqD.jpeg',
    git: 'https://github.com/juandvasquezp',
    linked: 'www.linkedin.com/in/juan-david-vasquez-pinzon',
  },
  {
    name: 'Daniel Santiago Ramírez Rocha',
    role: 'Desarrollador Backend',
    image: 'https://i.imgur.com/fa1bHTw.jpeg',
    git: 'https://github.com/Dan-code-str?tab=overview&from=2024-08-01&to=2024-08-20',
    linked: 'https://co.linkedin.com/in/daniel-santiago-ram%C3%ADrez-rocha-284621252',
  },  
];
</script>

<style scoped lang="scss">
.about-section {
  padding: 40px 20px;
  background-color: #f7f9fc;

  .container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 40px;
    gap: 20px;
  }

  .content {
    flex: 1;
    text-align: center;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;

    .title {
      color: #003366;
      margin-bottom: 20px;
      font-size: 24px;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  }

  .presentacion {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap; /* Permite que las tarjetas se reorganicen en pantallas pequeñas */
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .presentacion {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 15px;
    
    .title {
      font-size: 20px;
    }
  }
}
.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
  margin-bottom: 100px;
}

.team-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.team-card-image img {
  width: 100%;
  height: auto;
  border-bottom: 2px solid #4D6FB3;
}

.team-card-content {
  padding: 20px;
}

.team-card-content h2 {
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
}

.team-card-content p {
  font-size: 1em;
  color: #777;
  margin-bottom: 15px;
}

.social-links a {
  margin: 0 10px;
  color: #4D6FB3;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #FFD700;

}
.team-card-image img {
  width: 100%;
  height: 200px; 
  object-fit: cover; 
  border-bottom: 2px solid #4D6FB3; 
}

</style>
