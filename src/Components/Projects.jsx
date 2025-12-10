export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">

        {/* 1. PrognosAI */}
        <div className="project-card">
          <h3>PrognosAI – AI Driven Predictive Maintenance System</h3>
          <p>
            Built an LSTM-based model for Remaining Useful Life prediction using NASA C-MAPSS datasets.
            Designed full ML pipeline: preprocessing, RUL computation, feature engineering, and sequence generation.
            Achieved RMSE 16.88 & R² 0.83 with BatchNorm + Dropout tuning and deployed an interactive Streamlit dashboard.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> Python, NumPy, Pandas, TensorFlow/Keras, LSTM, Streamlit</p>
          <a href="https://github.com/PrognosAI-INF-SB/Chivukula-Sai-Rithivik.git" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

        {/* 2. LoPECS */}
        <div className="project-card">
          <h3>LoPECS – Low Powered Edge System for Autonomous Vehicles</h3>
          <p>
            Implemented YOLOv8 object detection and Visual SLAM for real-time on-device perception.
            Added Vosk-based voice assistance and developed edge-optimized modules enabling real-time navigation.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> Python, YOLOv8, OpenCV, Vosk STT, ROS, Edge Computing</p>
          <a href="https://github.com/rithivik-1512/Low_Powered_Edge_Computing_System_For_Vehicles.git" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

        {/* 3. TruthLens */}
        <div className="project-card">
          <h3>TruthLens – Fake News Detection (NLP)</h3>
          <p>
            Built TF-IDF + ML-based fake news classifier using LR, RF, and SVM achieving 95% accuracy.
            Developed Streamlit UI for manual predictions and CSV-based batch inference with visualization.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> Python, Scikit-learn, TF-IDF, Logistic Regression, SVM, Streamlit</p>
          <a href="https://github.com/rithivik-1512/fake_news_detection.git" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

        {/* 4. IMDB Sentiment Analysis */}
        <div className="project-card">
          <h3>IMDB Sentiment Analysis – Movie Review Classification</h3>
          <p>
            Implemented sentiment classifier using TF-IDF + Logistic Regression achieving 89% accuracy.
            Created Streamlit UI supporting text input and dataset uploads for sentiment prediction.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> Python, Scikit-learn, TF-IDF, Logistic Regression, Streamlit</p>
          <a href="https://github.com/rithivik-1512/sentiment_analysis.git" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

        {/* 5. VocaBot */}
        <div className="project-card">
          <h3>VocaBot – Voice Controlled Robot Navigation (Webots Simulation)</h3>
          <p>
            Enabled voice-controlled navigation using Vosk & Whisper STT models for movement and object detection.
            Built modular control pipeline integrating speech recognition with sensor-driven motion planning.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> Python, Webots, Vosk STT, Whisper, Robotics Simulation</p>
          <a href="https://github.com/rithivik-1512/voice_controlled_robot.git" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

        {/* 6. Raspberry Pi Voice Automation */}
        <div className="project-card">
          <h3>Voice Recognition & Automation – Raspberry Pi</h3>
          <p>
            Developed voice-controlled automation using Google Speech API for real-time command execution.
            Built Python pipeline triggering task automation and audio-based system controls.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> Python, Google Speech API, Raspberry Pi, GPIO Automation</p>
          <a href="YOUR_GITHUB_LINK" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

        {/* 7. ShopsBuzz */}
        <div className="project-card">
          <h3>ShopsBuzz – E-Commerce Website (Frontend)</h3>
          <p>
            Built product module using HTML, CSS, JS with search, filters, responsive layout, add-to-cart features, 
            and integrated voice-based search for accessibility.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> HTML, CSS, JavaScript, Voice Search API</p>
          <a href="https://github.com/Sandeep-Merugumala/ShopsBuzz.git" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

        {/* 8. SmartServe */}
        <div className="project-card">
          <h3>SmartServe – Intelligent Food Ordering & Delivery System</h3>
          <p>
            A full DSA-based food ordering and delivery system integrating Priority Queue 
            (order scheduling), Doubly Linked List (order history), Stack (undo/redo), 
            Binary Search Tree (menu management), and Graph + Dijkstra’s Algorithm 
            (optimal delivery routing). Demonstrates real backend workflow simulation 
            using pure Python data structures.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> Python, DSA (PQ, DLL, Stack, BST, Graphs), Algorithms</p>
          <a href="https://github.com/rithivik-1512/SmartServe.git" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

        {/* 9. Bluetooth Indoor Localization */}
        <div className="project-card">
          <h3>Bluetooth-Based Indoor Localization – Research Project</h3>
          <p>
            Conducted experiments using RSSI, RTT, CSI, and AoA on ESP32-IDF to analyze indoor ranging accuracy.
            Evaluated 13+ performance metrics and prepared IEEE-style research documentation.
          </p>
          <p className="tech-stack"><b>Tech Stack:</b> ESP32-IDF, Bluetooth BLE, Python, RSSI/RTT/CSI/AoA Analysis</p>
          <a href="YOUR_GITHUB_LINK" target="_blank" className="project-btn">GitHub Repo</a>
        </div>

      </div>
    </section>
  );
}
