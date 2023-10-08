// spring animation
anime({
  targets: 'header',
  translateY: [-100, 0],
  opacity: [0, 1],
  duration: 3000,
});

anime({
  targets: 'h1',
  translateY: [100, 0],
  delay: 100,
  opacity: [0, 1],
  duration: 3000,
});

function openNav() {
  document.getElementById('sidemenu').style.width = '250px';
}

function closeNav() {
  document.getElementById('sidemenu').style.width = '0';
}
