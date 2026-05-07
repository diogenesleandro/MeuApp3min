import React from 'react';
// 1. IMPORTANTE: Adicionei 'Image' na lista de imports
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView 
        style={styles.background} 
        contentContainerStyle={styles.container}
      >
        {/* 2. A IMAGEM NO TOPO: */}
        <Image 
          // Usamos uma URI para pegar uma logo genérica de tecnologia da internet
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2010/2010957.png' }} 
          style={styles.logo}
          // resizeMode garante que a imagem não fique esticada ou cortada
          resizeMode="contain" 
        />

        {/* O título agora fica embaixo da imagem */}
        <Text style={styles.titulo}>ETEC DE ITANHAEM</Text>
        
        <View style={styles.card}>
          <Text style={styles.subtitulo}>INFORMÁTICA PARA INTERNET</Text>
          <Text style={styles.descricao}>
            Integrado ao Ensino Médio
          </Text>
        </View>
        {/* TABELA DE HORÁRIOS */}
        <View style={styles.tabelaContainer}>
          <Text style={styles.tabelaTitulo}>Cronograma de Aulas - 2026</Text>
          
          {/* Cabeçalho */}
          <View style={[styles.tabelaLinha, styles.tabelaCabecalho]}>
            <Text style={styles.tabelaTextoCabecalho}>Aula</Text>
            <Text style={styles.tabelaTextoCabecalho}>Segunda</Text>
            <Text style={styles.tabelaTextoCabecalho}>Terça</Text>
          </View>

          {/* Linha 1 */}
          <View style={styles.tabelaLinha}>
            <Text style={styles.tabelaTexto}>1ª</Text>
            <Text style={styles.tabelaTexto}>DDM I</Text>
            <Text style={styles.tabelaTexto}>PAM II</Text>
          </View>

          {/* Linha 2 */}
          <View style={styles.tabelaLinha}>
            <Text style={styles.tabelaTexto}>2ª</Text>
            <Text style={styles.tabelaTexto}>DDM I</Text>
            <Text style={styles.tabelaTexto}>PAM II</Text>
          </View>

          {/* Linha de Destaque (Intervalo) */}
          <View style={[styles.tabelaLinha, styles.tabelaDestaque]}>
            <Text style={[styles.tabelaTexto, { color: '#00d4ff', fontWeight: 'bold' }]}>Intervalo</Text>
          </View>
        </View>
        <Text style={styles.textoFundo}>Arraste para ver mais</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#001a33', 
  },
  container: {
    flexGrow: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center', 
    gap: 20,
  },
  // 3. O ESTILO DA LOGO:
  logo: {
    width: 100,           // Largura da imagem
    height: 100,          // Altura da imagem
    marginBottom: 10,     // Espaço entre a logo e o título
    // Se a imagem tiver fundo branco, podemos tentar dar um filtro (opcional)
    // tintColor: '#00d4ff', // Descomente para pintar a logo de azul ciano
  },
  titulo: {
    color: '#00d4ff', 
    fontSize: 28,         // Reduzi um pouco para caber com a logo
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase', // Garante que fique tudo em maiúsculo
  },
card: {
  backgroundColor: 'rgba(255, 255, 255, 0.08)', // Levemente mais escuro
  padding: 25,
  borderRadius: 20,
  width: '100%',
  // Sombra suave para dar profundidade (opcional)
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 8, // Essencial para sombra no Android
},
  subtitulo: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
  },
  descricao: {
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  textoFundo: {
    color: '#555',
    fontSize: 12,
    marginTop: 20,
    textTransform: 'uppercase',
  }, 
  tabelaContainer: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#00d4ff33',
  },
  tabelaTitulo: {
    color: '#00d4ff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tabelaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  tabelaCabecalho: {
    borderBottomWidth: 2,
    borderBottomColor: '#00d4ff',
  },
  tabelaDestaque: {
    backgroundColor: '#002a50',
    borderBottomWidth: 0,
    borderRadius: 5,
  },
  tabelaTextoCabecalho: {
    color: '#00d4ff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tabelaTexto: {
    color: '#ccc',
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
});