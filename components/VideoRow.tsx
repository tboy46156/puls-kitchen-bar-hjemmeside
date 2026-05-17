export default function VideoRow() {
  const videos = [
    "/videos/AQNH5iVB9e3yZFxD73z3Q6LiNfP-6rk64fHXinBMI_cbvL2u5hBH-HwIWzE_P0u3lxNPiUUd5V2msXug6XGRaiAmj_iQ5Tb7HhH1OH6VAQ.mp4",
    "/videos/AQOWPkPE_XJ5h_ijlaF2PKJe929CZPBFFUhHGzXQN7tnSYoioHNqUXeG7rnbPdhlPcbGcuuHZq6__YFeG5_phBR2.mp4",
    "/videos/AQP0gPoS1ADKNIjgqm1gSwXQtGdgCikfXSU1YDmZhWbZ1IPc7L9rbiCjCLHDhirdfv2010rTFeCEeurGRq65Wz6q.mp4",
    "/videos/AQPHqyaoBx-nXji7KmOFY-bnpIgAlaJeQGDqpSuAFYa6mYofcdc32JT3USzU9Gmw7ITLnkwkGcmT_nagZW3e1Rw7iR9oO0Diqf2JHEhjGt8Kyg.mp4",
  ];

  return (
    <section className="bg-obsidian pt-0 pb-8 md:pb-12">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {videos.map((src, i) => (
            <div key={i} className="overflow-hidden border border-border-col">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover aspect-[9/16]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
