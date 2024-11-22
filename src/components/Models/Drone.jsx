import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Drone(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/dji_inspire_2_with_zenmuse_x5s.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0.001, 0, -0.077]}
          rotation={[-Math.PI / 2, 0, -0.014]}
          scale={0.017}>
          <group name="ecebe121fb934c1fbf9a91b7e1e68a59fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="f_low" position={[0, -8.465, -2.573]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_5" position={[0, -2.573, 8.465]}>
                    <mesh
                      name="f_low_COQUE_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.f_low_COQUE_0.geometry}
                      material={materials.COQUE}
                    />
                  </group>
                  <group
                    name="h_low"
                    position={[0, -19.475, 6.901]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={0.138}>
                    <group name="Object_8" position={[62.909, -1.269, 0]}>
                      <mesh
                        name="h_low_BLOCK_AVANT_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.h_low_BLOCK_AVANT_0.geometry}
                        material={materials.BLOCK_AVANT}
                      />
                    </group>
                  </group>
                  <group name="a_low" position={[0, 16.929, -0.721]}>
                    <group name="Object_11" position={[0, -19.502, 9.186]}>
                      <mesh
                        name="a_low_BLOCK_BATTERIE_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.a_low_BLOCK_BATTERIE_0.geometry}
                        material={materials.BLOCK_BATTERIE}
                      />
                    </group>
                    <group name="c_low" position={[0, -22.92, -16.097]}>
                      <mesh
                        name="c_low_SYSTEME_MECHANIC_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.c_low_SYSTEME_MECHANIC_0.geometry}
                        material={materials.SYSTEME_MECHANIC}
                      />
                      <group name="CENTRE" position={[0, 0.596, 8.008]} rotation={[0, 0.001, 0]}>
                        <group name="Object_16" position={[0, -0.596, -15.578]}>
                          <mesh
                            name="CENTRE_SYSTEME_MECHANIC_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.CENTRE_SYSTEME_MECHANIC_0.geometry}
                            material={materials.SYSTEME_MECHANIC}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="b_low" position={[0, -19.502, 9.186]}>
                      <mesh
                        name="b_low_SSD_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.b_low_SSD_0.geometry}
                        material={materials.material}
                      />
                    </group>
                    <group name="VIS_CG2" position={[0.973, -17.681, -8.341]}>
                      <group name="Object_21" position={[2.772, -7.724, 10.739]}>
                        <mesh
                          name="VIS_CG2_BRAS_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.VIS_CG2_BRAS_0.geometry}
                          material={materials.BRAS}
                        />
                      </group>
                    </group>
                    <group name="VIS_CD" position={[-0.973, -17.681, -8.342]}>
                      <group name="Object_24" position={[4.717, -7.724, 10.739]}>
                        <mesh
                          name="VIS_CD_BRAS_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.VIS_CD_BRAS_0.geometry}
                          material={materials.BRAS}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="e_low" position={[0, 19.379, -1.759]}>
                    <group name="Object_27" position={[0, -21.951, 10.224]}>
                      <mesh
                        name="e_low_BATTERIE_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.e_low_BATTERIE_0.geometry}
                        material={materials.BATTERIE}
                      />
                    </group>
                  </group>
                  <group name="i_low" position={[0, -22.451, -15.479]}>
                    <group name="Object_30" position={[0, 13.661, -6.031]}>
                      <mesh
                        name="i_low_STABILISATEUR_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.i_low_STABILISATEUR_0.geometry}
                        material={materials.STABILISATEUR}
                      />
                    </group>
                    <group name="CAM_C" position={[0.024, -0.973, -6.722]}>
                      <group name="Object_33" position={[-0.024, 14.634, -0.086]}>
                        <mesh
                          name="CAM_C_CAMERA_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.CAM_C_CAMERA_0.geometry}
                          material={materials.CAMERA}
                        />
                      </group>
                      <group name="CAM_BACK" position={[-0.003, 14.629, -16.284]}>
                        <group name="Object_36" position={[-0.021, 0.005, 16.198]}>
                          <mesh
                            name="CAM_BACK_CAMERA_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.CAM_BACK_CAMERA_0.geometry}
                            material={materials.CAMERA}
                          />
                        </group>
                        <group name="j_low" position={[-11.274, -17.474, 0.003]}>
                          <group name="Object_39" position={[11.253, 17.479, 16.195]}>
                            <mesh
                              name="j_low_CAMERA_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.j_low_CAMERA_0.geometry}
                              material={materials.CAMERA}
                            />
                          </group>
                          <group name="lentille">
                            <group name="Object_42" position={[11.253, 17.479, 16.195]}>
                              <mesh
                                name="lentille_LENTILLE_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.lentille_LENTILLE_0.geometry}
                                material={materials.LENTILLE}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="IK_Chain001"
                  position={[-2.434, -17.422, 2.817]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="IK_Chain002"
                  position={[2.434, -17.422, 2.817]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="Object019"
                  position={[-2.583, -3.86, 2.802]}
                  rotation={[-1.57, -0.001, 0]}>
                  <group name="Object_47" position={[2.583, -0.616, -17.707]}>
                    <mesh
                      name="Object019_SYSTEME_MECHANIC_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object019_SYSTEME_MECHANIC_0.geometry}
                      material={materials.SYSTEME_MECHANIC}
                    />
                  </group>
                  <group name="Object014" position={[-0.03, -0.001, -3.769]}>
                    <group name="Object_50" position={[2.613, -0.616, -17.655]}>
                      <mesh
                        name="Object014_SYSTEME_MECHANIC_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object014_SYSTEME_MECHANIC_0.geometry}
                        material={materials.SYSTEME_MECHANIC}
                      />
                    </group>
                    <group name="Object015" position={[0.03, 0.001, 0.053]}>
                      <group name="Object_53" position={[2.583, -0.616, -17.707]}>
                        <mesh
                          name="Object015_SYSTEME_MECHANIC_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object015_SYSTEME_MECHANIC_0.geometry}
                          material={materials.SYSTEME_MECHANIC}
                        />
                      </group>
                      <group name="Object016" position={[-1.858, 0, 1.302]}>
                        <group name="Object_56" position={[4.441, -0.616, -19.01]}>
                          <mesh
                            name="Object016_SYSTEME_MECHANIC_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object016_SYSTEME_MECHANIC_0.geometry}
                            material={materials.SYSTEME_MECHANIC}
                          />
                        </group>
                        <group name="Object017" position={[0.028, 0, 0.01]}>
                          <group name="Object_59" position={[4.413, -0.616, -19.02]}>
                            <mesh
                              name="Object017_SYSTEME_MECHANIC_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object017_SYSTEME_MECHANIC_0.geometry}
                              material={materials.SYSTEME_MECHANIC}
                            />
                          </group>
                          <group
                            name="BRAS_D"
                            position={[-1.834, -0.067, 1.111]}
                            rotation={[-0.039, -1.05, -0.044]}>
                            <group name="Object_62" position={[10.003, -2.997, -1.613]}>
                              <mesh
                                name="BRAS_D_BRAS_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.BRAS_D_BRAS_0.geometry}
                                material={materials.BRAS}
                              />
                            </group>
                            <group name="PIN_D" position={[-32.06, 14.715, 17.558]}>
                              <group name="Object_65" position={[42.078, -17.699, -19.159]}>
                                <mesh
                                  name="PIN_D_BRAS_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.PIN_D_BRAS_0.geometry}
                                  material={materials.BRAS}
                                />
                              </group>
                              <group
                                name="PIED2"
                                position={[-4.358, 0.446, 2.447]}
                                rotation={[0.001, 1.051, 0.021]}>
                                <group name="Object_68" position={[42.691, -13.978, -15.624]}>
                                  <mesh
                                    name="PIED2_PIEDS_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.PIED2_PIEDS_0.geometry}
                                    material={materials.PIEDS}
                                  />
                                </group>
                                <group
                                  name="MOTOR3"
                                  position={[-0.075, 43.593, 3.157]}
                                  rotation={[0.056, 0.053, -0.003]}>
                                  <group
                                    name="Object_71"
                                    position={[85.443, 0.144, 6.661]}
                                    rotation={[-0.085, 0, 0]}>
                                    <mesh
                                      name="MOTOR3_HELICES_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.MOTOR3_HELICES_0.geometry}
                                      material={materials.HELICES}
                                    />
                                  </group>
                                  <group
                                    name="PROPELLER3_low"
                                    position={[-0.161, -0.065, 4.407]}
                                    rotation={[0, 0, -1.689]}>
                                    <group
                                      name="Object_74"
                                      position={[85.603, 0.208, 2.254]}
                                      rotation={[-0.085, 0, 0]}>
                                      <mesh
                                        name="PROPELLER3_low_HELICES_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.PROPELLER3_low_HELICES_0.geometry}
                                        material={materials.HELICES}
                                      />
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name="MOTOR2"
                                  position={[-0.032, -52.339, 3.336]}
                                  rotation={[-0.089, 0, 0]}>
                                  <group
                                    name="Object_77"
                                    position={[85.4, 94.554, 14.933]}
                                    rotation={[0.089, 0, 0]}>
                                    <mesh
                                      name="MOTOR2_HELICES_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.MOTOR2_HELICES_0.geometry}
                                      material={materials.HELICES}
                                    />
                                  </group>
                                  <group
                                    name="PROPELLER2_low"
                                    position={[0.047, 0.151, 4.724]}
                                    rotation={[0.089, 0, 0]}>
                                    <group name="Object_80" position={[85.353, 94.937, 1.778]}>
                                      <mesh
                                        name="PROPELLER2_low_HELICES_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.PROPELLER2_low_HELICES_0.geometry}
                                        material={materials.HELICES}
                                      />
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name="BOUCLE_D001"
                                  position={[0.003, 9.083, -0.008]}
                                  rotation={[0, 0.754, 0]}>
                                  <group name="Object_83" position={[42.687, -23.051, -15.616]}>
                                    <mesh
                                      name="BOUCLE_D001_PIEDS_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.BOUCLE_D001_PIEDS_0.geometry}
                                      material={materials.PIEDS}
                                    />
                                  </group>
                                  <group name="VIS_D" position={[-0.184, -6.077, -7.337]}>
                                    <group name="Object_86">
                                      <mesh
                                        name="VIS_D_BRAS_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.VIS_D_BRAS_0.geometry}
                                        material={materials.BRAS}
                                      />
                                    </group>
                                    <group
                                      name="PETIT_BRAS_D"
                                      position={[0.059, 0.47, 0.026]}
                                      rotation={[-1.445, -1.344, -1.339]}>
                                      <group name="Object_89" position={[46.589, -21.615, -14.201]}>
                                        <mesh
                                          name="PETIT_BRAS_D_BRAS_0"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.PETIT_BRAS_D_BRAS_0.geometry}
                                          material={materials.BRAS}
                                        />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                            <group
                              name="VIZ_CD"
                              position={[-4.163, 0.068, -1.468]}
                              rotation={[0.005, 0.721, 0.003]}>
                              <group name="Object_92" position={[14.131, -3.074, -0.15]}>
                                <mesh
                                  name="VIZ_CD_BRAS_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.VIZ_CD_BRAS_0.geometry}
                                  material={materials.BRAS}
                                />
                              </group>
                              <group name="Object005" rotation={[0.003, 0.72, 0.006]}>
                                <group name="Object_95" position={[10.424, -0.687, -18.668]}>
                                  <mesh
                                    name="Object005_SYSTEME_MECHANIC_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object005_SYSTEME_MECHANIC_0.geometry}
                                    material={materials.SYSTEME_MECHANIC}
                                  />
                                </group>
                                <group
                                  name="Object006"
                                  position={[4.6, -0.08, -3.494]}
                                  rotation={[-0.007, 0.37, 0]}>
                                  <group name="Object_98" position={[5.824, -0.607, -15.175]}>
                                    <mesh
                                      name="Object006_SYSTEME_MECHANIC_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object006_SYSTEME_MECHANIC_0.geometry}
                                      material={materials.SYSTEME_MECHANIC}
                                    />
                                  </group>
                                  <group name="Object004" rotation={[-0.006, 0.37, -0.001]}>
                                    <group name="Object_101" position={[5.824, -0.607, -15.174]}>
                                      <mesh
                                        name="Object004_SYSTEME_MECHANIC_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object004_SYSTEME_MECHANIC_0.geometry}
                                        material={materials.SYSTEME_MECHANIC}
                                      />
                                    </group>
                                    <group
                                      name="Object009"
                                      position={[3.379, 0.066, 0.267]}
                                      scale={[1, 1.477, 1]}>
                                      <group name="Object_104" position={[-5.824, -0.607, -15.175]}>
                                        <mesh
                                          name="Object009_SYSTEME_MECHANIC_0"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.Object009_SYSTEME_MECHANIC_0.geometry}
                                          material={materials.SYSTEME_MECHANIC}
                                        />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                            <group
                              name="k_low"
                              position={[0.8, -6.764, 1.454]}
                              rotation={[0.242, 1.143, -0.054]}>
                              <group name="Object_107" position={[9.192, 3.73, -3.091]}>
                                <mesh
                                  name="k_low_BRAS_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.k_low_BRAS_0.geometry}
                                  material={materials.BRAS}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object018"
                  position={[2.583, -3.86, 2.802]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_110" position={[-2.583, -0.616, -17.707]}>
                    <mesh
                      name="Object018_SYSTEME_MECHANIC_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object018_SYSTEME_MECHANIC_0.geometry}
                      material={materials.SYSTEME_MECHANIC}
                    />
                  </group>
                  <group name="Object013" position={[0.029, 0, -3.769]}>
                    <group name="Object_113" position={[-2.612, -0.616, -17.655]}>
                      <mesh
                        name="Object013_SYSTEME_MECHANIC_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object013_SYSTEME_MECHANIC_0.geometry}
                        material={materials.SYSTEME_MECHANIC}
                      />
                    </group>
                    <group name="Object012" position={[-0.029, 0, 0.053]}>
                      <group name="Object_116" position={[-2.583, -0.616, -17.707]}>
                        <mesh
                          name="Object012_SYSTEME_MECHANIC_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object012_SYSTEME_MECHANIC_0.geometry}
                          material={materials.SYSTEME_MECHANIC}
                        />
                      </group>
                      <group name="Object010" position={[1.84, 0, 1.336]}>
                        <group name="Object_119" position={[-4.423, -0.616, -19.044]}>
                          <mesh
                            name="Object010_SYSTEME_MECHANIC_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object010_SYSTEME_MECHANIC_0.geometry}
                            material={materials.SYSTEME_MECHANIC}
                          />
                        </group>
                        <group name="Object011" position={[-0.01, 0, -0.024]}>
                          <group name="Object_122" position={[-4.413, -0.616, -19.02]}>
                            <mesh
                              name="Object011_SYSTEME_MECHANIC_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object011_SYSTEME_MECHANIC_0.geometry}
                              material={materials.SYSTEME_MECHANIC}
                            />
                          </group>
                          <group
                            name="BRAD_G"
                            position={[1.834, -0.067, 1.112]}
                            rotation={[-0.059, 1.068, 0.064]}>
                            <group name="Object_125" position={[-2.514, -2.997, -1.613]}>
                              <mesh
                                name="BRAD_G_BRAS_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.BRAD_G_BRAS_0.geometry}
                                material={materials.BRAS}
                              />
                            </group>
                            <group name="PIN_G" position={[32.061, 14.715, 17.558]}>
                              <group name="Object_128" position={[-34.589, -17.699, -19.159]}>
                                <mesh
                                  name="PIN_G_BRAS_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.PIN_G_BRAS_0.geometry}
                                  material={materials.BRAS}
                                />
                              </group>
                              <group
                                name="PIED1"
                                position={[4.357, 0.445, 2.447]}
                                rotation={[0.007, -1.069, -0.025]}>
                                <group name="Object_131" position={[-42.691, -13.978, -15.624]}>
                                  <mesh
                                    name="PIED1_PIEDS_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.PIED1_PIEDS_0.geometry}
                                    material={materials.PIEDS}
                                  />
                                </group>
                                <group
                                  name="MOTOR1"
                                  position={[0.033, -52.333, 3.335]}
                                  rotation={[-0.068, 0.002, 0]}>
                                  <group
                                    name="Object_134"
                                    position={[-0.047, 94.576, 14.754]}
                                    rotation={[0.087, 0, 0]}>
                                    <mesh
                                      name="MOTOR1_HELICES_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.MOTOR1_HELICES_0.geometry}
                                      material={materials.HELICES}
                                    />
                                  </group>
                                  <group
                                    name="PROPELLER1_low"
                                    position={[-0.05, 0.177, 4.317]}
                                    rotation={[0.087, 0, 0]}>
                                    <group name="Object_137" position={[0.003, 94.949, 2.186]}>
                                      <mesh
                                        name="PROPELLER1_low_HELICES_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.PROPELLER1_low_HELICES_0.geometry}
                                        material={materials.HELICES}
                                      />
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name="MOTOR4"
                                  position={[0.075, 43.592, 3.358]}
                                  rotation={[0.085, 0.001, 0]}>
                                  <group
                                    name="Object_140"
                                    position={[-0.088, 0.108, 6.461]}
                                    rotation={[-0.082, 0, 0]}>
                                    <mesh
                                      name="MOTOR4_HELICES_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.MOTOR4_HELICES_0.geometry}
                                      material={materials.HELICES}
                                    />
                                  </group>
                                  <group
                                    name="PROPELLER4_low"
                                    position={[0.123, 0.156, 4.311]}
                                    rotation={[0, 0.012, 1.593]}>
                                    <group
                                      name="Object_143"
                                      position={[-0.241, 0.261, 2.147]}
                                      rotation={[-0.095, 0, 0]}>
                                      <mesh
                                        name="PROPELLER4_low_HELICES_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.PROPELLER4_low_HELICES_0.geometry}
                                        material={materials.HELICES}
                                      />
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name="BOUCLE_G"
                                  position={[-0.003, 9.073, -0.008]}
                                  rotation={[0, -0.779, 0]}>
                                  <group name="Object_146" position={[-42.687, -23.051, -15.616]}>
                                    <mesh
                                      name="BOUCLE_G_PIEDS_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.BOUCLE_G_PIEDS_0.geometry}
                                      material={materials.PIEDS}
                                    />
                                  </group>
                                  <group name="VIS_G" position={[0.184, -6.077, -7.337]}>
                                    <group name="Object_149" position={[-39.159, -21.151, -14.192]}>
                                      <mesh
                                        name="VIS_G_BRAS_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.VIS_G_BRAS_0.geometry}
                                        material={materials.BRAS}
                                      />
                                    </group>
                                    <group
                                      name="PETIT_BRAS_G"
                                      position={[-0.058, 0.47, 0.026]}
                                      rotation={[-1.603, 1.337, 1.503]}>
                                      <group name="Object_152" position={[-39.1, -21.615, -14.201]}>
                                        <mesh
                                          name="PETIT_BRAS_G_BRAS_0"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.PETIT_BRAS_G_BRAS_0.geometry}
                                          material={materials.BRAS}
                                        />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                            <group
                              name="VIS_CG"
                              position={[4.151, 0.105, -1.445]}
                              rotation={[0.012, -0.731, 0]}>
                              <group name="Object_155" position={[-6.642, -3.074, -0.15]}>
                                <mesh
                                  name="VIS_CG_BRAS_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.VIS_CG_BRAS_0.geometry}
                                  material={materials.BRAS}
                                />
                              </group>
                              <group name="Object003" rotation={[0.009, -0.73, -0.003]}>
                                <group name="Object_158" position={[-10.398, -0.66, -18.655]}>
                                  <mesh
                                    name="Object003_SYSTEME_MECHANIC_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object003_SYSTEME_MECHANIC_0.geometry}
                                    material={materials.SYSTEME_MECHANIC}
                                  />
                                </group>
                                <group
                                  name="Object002"
                                  position={[-4.583, -0.125, -3.483]}
                                  rotation={[-0.007, -0.371, 0.001]}>
                                  <group name="Object_161" position={[-5.824, -0.607, -15.175]}>
                                    <mesh
                                      name="Object002_SYSTEME_MECHANIC_0"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object002_SYSTEME_MECHANIC_0.geometry}
                                      material={materials.SYSTEME_MECHANIC}
                                    />
                                  </group>
                                  <group
                                    name="Object001"
                                    position={[-0.012, 0, 0]}
                                    rotation={[-0.006, -0.369, 0.002]}>
                                    <group name="Object_164" position={[-5.812, -0.572, -15.22]}>
                                      <mesh
                                        name="Object001_SYSTEME_MECHANIC_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Object001_SYSTEME_MECHANIC_0.geometry}
                                        material={materials.SYSTEME_MECHANIC}
                                      />
                                    </group>
                                    <group
                                      name="Object008"
                                      position={[-3.367, 0.072, 0.218]}
                                      scale={[1, 1.477, 1]}>
                                      <group name="Object_167" position={[-5.824, -0.607, -15.175]}>
                                        <mesh
                                          name="Object008_SYSTEME_MECHANIC_0"
                                          castShadow
                                          receiveShadow
                                          geometry={nodes.Object008_SYSTEME_MECHANIC_0.geometry}
                                          material={materials.SYSTEME_MECHANIC}
                                        />
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                            <group
                              name="Object020"
                              position={[-0.8, -6.764, 1.454]}
                              rotation={[0.261, -1.163, 0.059]}>
                              <group name="Object_170" position={[-1.703, 3.73, -3.091]}>
                                <mesh
                                  name="Object020_BRAS_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object020_BRAS_0.geometry}
                                  material={materials.BRAS}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="PISTE"
                  position={[0, -61.691, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1.702, 1.702, 0.76]}>
                  <mesh
                    name="PISTE_PISTE_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.PISTE_PISTE_0.geometry}
                    material={materials.PISTE}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dji_inspire_2_with_zenmuse_x5s.glb')
