# Installation:

It is not working with bower nor npm, so you might clone/download it addon and create a folder called __auth_lib__, 
add it to your ionic project, just like bellow:

![ionic2-devise-token-auth structure](https://gm1.ggpht.com/YSR91OWV89AbjXLwqVj6rJnDRgJrRzE2MH6esTXxVx8RUgJVv0Li7y5iTSVf_-v0vuYjNNw8H6DXJVQb5qqdP-rEFNHYpUqN0zYSZrQFqxEQ9OjI1dzFZGhAN5MzKzFbJ5skKFTJUpbGi--vpfanuF9E6f5rqHUjPjxyQldSlocKQIif_DNC95aibC7l3TYjLam46Xrf2sGfKK-1BmQN2gVSOip5KSPk6hKPLnnBPPtfukP3AtI4iL0DxZgviK8GC5RcQbtbGq-fhOqhYYht3zCEk7rkMTYL-XuLDjn2j3mXXYoNX8cGUuS6cFr7wV9-AeJYTgA5RYza41TFwsNH97Dt0ocHVjVVlPUGGl2Sg4HYo8SnCfpxTkNJyUKeSfCmq9_BOpbupoX0bNI8gTyyfEL4avgncmrrJ3nuXuYZF6srqKFyvGkJG9JZpZ5bbOzpzYXVLvKBLfEq_NUwx3Urzk9dtvH1GDy28Vy0EzYF66UmqdthN6JONcgmBBVN3L4lCWw64hljyR-qT9fh64fVdWTVPKNF__9JDge06YL6YcHLd1z1KTH6jeBOP6utGRYQQFFUzRvNEWN2_L81i3_rBMnIMepaOK9-OtZmeO4cKI_buUtSJJP4e0tBAgyvYB3WSQ2Q2OAUojlJdlc0yA-pC4UgMNRr4E_a6cnULvLF1py0q3ZwcD2cM-JU9INEmDO-GA6MMPjESimi_IA=w456-h1008-l75-ft)



__on next step import it file & config your devise target URL, just like that__:


![ionic2-devise-token-auth settings config](https://gm1.ggpht.com/NR2jfvzStUJq5QTL6urPUbtcL7C7fcfmBZziB7U_ZLyTZ2tpqsf-ws97Ug5O0VpbW7OnWbWFHOhj8Dizhl-ZRYpo1UrQsGWZJvnJuGiaPQGpMj0DChAH7nMlZD2tyle-bFn-kZkBxHiWmOr2nFegoJEd5CGS5Rm5nW4rOywXYZKmfqZ-whm42jJRSyNMGGryXaAV3MntTDXQq1D9_Y80pbMX-DpbULORbxrDDoSH88mVFtsfxjrofCqD_goUeT3Nk7uBpvNplmBvXeS5nY1BowsRPwnJNbDJG1ZmGL1Gfl4JMeCL_14rWe4sIKN-RVpwvNf56RHWLMG2De7GqsHu03D218VbbT_aU2_wQ99f3tkxszVMesQCMzwjTCUV_Q_3YWgBhwKdSudtfEnqxE-ntv-rMfoUqG6Khy-ZeV6TWhEvvnSJmXoPCXWhnzmw1Te5RjdaNPrPgFkeUE60_eHC7VviANMAv6NGOdwZhdfN4f6BBDvzx7MiDUFROP0tiTKXEB380uq_yzBsli8cVQ4rgpXhPRfoHpfc6YCrUCRMb5ykROls8Bv2e1y835EeS4TN_D_qnNMKJn9E0b4efSgclwc4cKhQHf2DOdhqWk_0fWmwRNXaQtHVuocVW2bPML9RXvM8hXhNLJd3z4YF4b-jmMPLCHyhudy0DqssIoZ8orbwEGgKxLdvBMocevwvDwI2W1wSkDOliNzUxTLJzQ=w1008-h688-l75-ft)


__To perform the request, import it ```AuthService, AuthHttp```__:
![ionic2-devise-token-auth perform sign request](https://gm1.ggpht.com/J2cg8O7XYquuG2KyTA-8RpPtRrOEGNCQgGCLP2WniUtjvedcTn8HmG6g92v1uHvQqcKCyuv3U4m12WdxDYnpeaqTKz3yxklf-jJEnnsmrj3vSAbVWLPHDLVMlU-vkSoo_2ZTspczWD0QtiaxPBNTaFWaNswCtnfNhPmcgzfvnol0aAigdbn_ei7v-FboBy4AqTlRLc-Q4aB62vRoOvBCQChPV5gnYboG0VfWmIBxchEySZYtPwINm4wgACK1iB2MK6gktLOIZFejvH2W2ez8iDvmdoLFm0mw3f-Iu6UGAp-tcx3WUAq8gV2RkjeawOvCgDh0hpvSTC9lH7u91lythepldM-X9lg2OG_Z7RfCjmkE8W0AYHFPI-dkfANO8R0xofAMo_NF0shBLMyVZLaPj2FECprGDXPk1ey8_r6CdOoNtm-K-ZDTLCJyCutOVjJIQi83w0WhZOQ2sh-PZLpZgko0Joqui0GgUa6onSEuKqKdZfmxsjtxaUQwIxB7kiiCGDCWGwvSP7kTgVjdhf0RUX2dTNF2Z3kGpvfL_fTHMujajiD4A63EMgYmMLLjCy8sfxOND6Crk5x5UopiLZ2vRUKV1N48VJ1Uji08heQ7hLtB_Ds0QQc93nq0t999htqvsSyOYFDlKzy3jueAZ2oiHSFSngWKVxG7AjL_jSdmsUZh1_XOulJ2dLArwk9M_qs2OBGXaOL2OKoeo4ng=w1008-h816-l75-ft)

__For any request forward, that need a signed session user, just call the authHttp, like that__:
![ionic2-devise-token-auth perform signed request](https://gm1.ggpht.com/dvUEIJueE_o7ACRTOPoK79nbQ_wXV-rriJ_zvsYLzsRiqX2-Rd1IE6wPns_Ftiahzu6jRivUSmkcs2SsZXfYShIqUExg_A3yusKhPwvkqtp0bq1YMdIIuu1WxMDRvL_Om2DIHyJPS-SWe0QCohs99SrjQ3BmQhuo3G44VJzsCNKBoZzAB-9jRANUsOqIF0AvJRLB4xbh30xAk_KcBnHixJ64M-0IrZqETvuH9FzfJkREiBTdnip0B3LHHqu-7mEhZu6-7Xe8p1PhIdEuqJhWGXLnDxUMt9w67zR3cP4iJP3LdoRMqXuiyMHCTL7_MCSQUBvDVG_3GvNujK1-2TujvTk1jZ2n8KahU0nMcUegQBGU2oTy5Fc6rUpRfppxDjssO4zhoG5p3NV5h2Ok00wvYx1R09OmHdbVYrzQtEW4U_vmD-jowA04Qt86Syoat2WMq-pNezoDNLYuPt1prqc-o61wVkOLwGciYzGGDsGdMztyhJXn1MEvbcRKQ2SXQP7FLppiYKw_rVk2QJ2I5eCxw-yMlnV2HCGSmY3sSDLCjuEG752dG1b9xa-hJ6yzIRyoEmDkm9nBo2fiuyb0NrL9QOvUdNrhtCiBUAKcrdqEfCRzlcFqdOfW5XOKbBwJrjsPuusGq_frqCLTRM4Qc3-meUxUzXQ1GRDnXeIxU6Vox7mNwtv5qmsZUebR6lOiNneXu_4IXhZB_SLcKYqmWw=w1008-h1004-l75-ft)