export const SITE_CONFIG = {
  name: 'Sanvyrsoft',
  domain: 'https://www.sanvyrsoft.com',
  whatsappNumber: '5551991867278', // WhatsApp Business Oficial: (51) 99186-7278
  formattedPhone: '+55 (51) 99186-7278',
  getWhatsappLink: (message: string) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
  },
  projects: {
    sml3000: {
      name: 'SML-3000',
      title: 'Sistema de Monitoramento Térmico de Leitos Hospitalares',
      patentNumber: 'BR 10 2015 013528-9',
      hospital: 'Hospital Moinhos de Vento (Porto Alegre/RS)',
    },
    mocap: {
      name: 'Mocap da Sanvyrsoft',
      title: 'Traje de Captura de Movimento Corporal em Tempo Real',
    },
    darkmeancity: {
      name: 'DARK MEAN CITY: The Beginning',
      playstationUrl: 'https://store.playstation.com/pt-br/concept/10002981',
      argosUrl: 'https://www.argosrealgames.com/pt/games/darkmeancity-thebeginning',
      imdbUrl: 'https://www.imdb.com/pt/title/tt13800396/',
      imdbCastUrl: 'https://www.imdb.com/pt/title/tt13800396/fullcredits/',
    }
  }
};
